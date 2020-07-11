import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';

@Injectable({
    providedIn: 'root',
})
export class FilerenamerService {
    public filePath: string;
    public filePrefix: any;
    public fs = this.electronService.remote.require('fs');
    public path = this.electronService.remote.require('path');

    constructor(private electronService: ElectronService, private router: Router) {}

    public renameFiles(fileList) {
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

    public editFileName(fileName) {
        const _fileName = this.removeJunkData(fileName);
        const extension = this.path.extname(_fileName);
        const epNo = this.fetchEpisodeNo(_fileName);
        return `${this.filePath}${this.path.sep}${this.filePrefix}${epNo}${extension}`;
    }

    public displayFiles() {
        const files = new Map<string, string>();
        return new Promise((resolve, reject) => {
            const folderPath = this.filePath;
            this.fs.readdir(folderPath, (err, items) => {
                if (err) reject(err);
                for (const item of items) {
                    const name = `${folderPath}${this.path.sep}${item}`;
                    if (!this.fs.statSync(name).isDirectory()) {
                        files.set(item, name);
                    }
                }
                resolve(files);
            });
        });
    }

    public removeJunkData(fileName) {
        const removeStr = ['720p', '1080p', 'x264', 'x265', '480p', '360p', '10bit', 's01'];
        removeStr.forEach(temp => {
            fileName = fileName.toLowerCase().replace(temp);
        });
        return fileName;
    }

    public fetchEpisodeNo(fileName) {
        fileName = this.removeJunkData(fileName);
        let epNo = fileName.replace(/\D/g, '');
        if (epNo.length > 3) epNo = epNo.substring(0, epNo.length / 2);
        return epNo;
    }

    public startProcess(path, filePrefix) {
        this.filePath = path;
        this.filePrefix = filePrefix;
        this.router.navigate(['process']);
    }
}
