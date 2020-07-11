import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { FilerenamerService } from 'src/app/service/filerenamer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public fileInputsForm: FormGroup;
    public files = [];

    constructor(private es: ElectronService, private frService: FilerenamerService) {}

    public ngOnInit() {
        this.fileInputsForm = new FormGroup({
            folderName: new FormControl('', Validators.required),
            filePrefix: new FormControl('', Validators.required),
        });
    }

    public async browse() {
        const folderPathResp = await this.es.remote.dialog.showOpenDialog({
            title: 'Select a folder',
            properties: ['openDirectory'],
        });
        const folderPath = folderPathResp && folderPathResp.filePaths[0];
        if (folderPath === undefined) {
            return;
        }
        this.fileInputsForm.get('folderName').setValue(folderPath);
    }

    public executeProcess() {
        this.frService.startProcess(
            this.fileInputsForm.get('folderName').value,
            this.fileInputsForm.get('filePrefix').value,
        );
    }
}
