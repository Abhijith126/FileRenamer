import { Component, OnInit } from '@angular/core';
import { FilerenamerService } from 'src/app/service/filerenamer.service';

@Component({
    selector: 'app-process',
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
    public files: any = [];
    constructor(private frs: FilerenamerService) {}

    public ngOnInit() {
        this.frs.displayFiles().then(files => this.processFiles(files));
    }

    public processFiles(fileList) {
        this.files = this.frs.renameFiles(fileList);
    }
}
