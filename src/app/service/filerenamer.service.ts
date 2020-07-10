import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class FilerenamerService {
    filePath: string;
    filePrefix: any;
    fs = this.electronService.remote.require('fs');
    path = this.electronService.remote.require('path');

    constructor(private electronService: ElectronService, private router: Router) {}

    renameFiles(fileList) {
        const fileData = [];
        fileList.forEach((value: string, key: string) => {
            const modifiedFile = this.editFileName(key);
            this.fs.renameSync(value, modifiedFile);
            fileData.push({
                oldFileName: key,
                newFileName: this.path.parse(modifiedFile).name,
            });
        });
        return fileData;
    }

    editFileName(fileName) {
        const _fileName = this.removeJunkData(fileName);
        const extension = this.path.extname(_fileName);
        const epNo = this.fetchEpisodeNo(_fileName);
        return `${this.filePath}${this.path.sep}${this.filePrefix}${epNo}${extension}`;
    }

    displayFiles() {
        const files_ = new Map<String, String>();
        return new Promise((resolve, reject) => {
            const folderPath = this.filePath;
            this.fs.readdir(folderPath, (err, items) => {
                if (err) reject(err);
                for (let i = 0; i < items.length; i++) {
                    const name = folderPath + '/' + items[i];
                    if (!this.fs.statSync(name).isDirectory()) {
                        files_.set(items[i], name);
                    }
                }
                resolve(files_);
            });
        });
    }

    removeJunkData(fileName) {
        const removeStr = ['720p', '1080p', 'x264', 'x265', '480p', '360p', '10bit', 's01'];
        removeStr.forEach(temp => {
            fileName = fileName.toLowerCase().replace(temp);
        });
        return fileName;
    }

    fetchEpisodeNo(fileName) {
        fileName = this.removeJunkData(fileName);
        console.log(fileName);
        let epNo = fileName.replace(/\D/g, '');
        if (epNo.length > 3) epNo = epNo.substring(0, epNo.length / 2);
        return epNo;
    }

    startProcess(path, filePrefix) {
        this.filePath = path;
        this.filePrefix = filePrefix;
        this.router.navigate(['process']);
    }
}
