import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilerenamerService {

  filePath: string;
  filePrefix: any;

  constructor(private electronService: ElectronService, private router: Router) { }

  renameFiles(fileList) {
    const fs = this.electronService.remote.require('fs');
    fileList.forEach((value: string, key: string) => {
      fs.renameSync(value, this.editFileName(key));
    });
  }

  editFileName(fileName) {
    const path = this.electronService.remote.require('path');
    fileName = this.removeJunkData(fileName);
    const extension = path.extname(fileName);
    const epNo = this.fetchEpisodeNo(fileName);
    return `${this.filePath}/${this.filePrefix}${epNo}${extension}`;
  }

  displayFiles() {
    const fs = this.electronService.remote.require('fs');
    const files_ = new Map<String, String>();
    return new Promise((resolve, reject) => {
      const folderPath = this.filePath;
      fs.readdir(folderPath, function (err, items) {
        if (err) reject(err);
        for (let i = 0; i < items.length; i++) {
          const name = folderPath + '/' + items[i];
          if (!fs.statSync(name).isDirectory()) {
            files_.set(items[i], name);
          }
        }
        resolve(files_);
      });
    });
  }

  removeJunkData(fileName) {
    const removeStr = ["720p", "1080p", "x264", "x265", "480p", "360p", "10bit", "s01"];
    removeStr.forEach(temp => {
      fileName = fileName.toLowerCase().replace(temp);
    });
    return fileName;
  }

  fetchEpisodeNo(fileName) {
    fileName = this.removeJunkData(fileName);
    console.log(fileName)
    let epNo = fileName.replace(/\D/g, '');
    if (epNo.length > 3)
      epNo = epNo.substring(0, epNo.length / 2);
    return epNo;
  }

  startProcess(path, filePrefix) {
    this.filePath = path;
    this.filePrefix = filePrefix;
    this.router.navigate(['process']);
  }

}
