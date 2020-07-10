import { Component, OnInit } from '@angular/core';
import { FilerenamerService } from 'src/app/service/filerenamer.service';

@Component({
    selector: 'app-process',
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
    files: any;
    constructor(private frs: FilerenamerService) {}

    ngOnInit() {
        this.frs.displayFiles().then(files => {
            this.files = files;
            this.processFiles(this.files);
        });
    }

    processFiles(fileList) {
        let renamedFiles = this.frs.renameFiles(fileList);
    }
}
