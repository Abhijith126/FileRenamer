import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { LINKS } from 'src/app/constants';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    public versions: any;
    public platform: string;
    public app = this.es.remote.app;
    public shell = this.es.shell;
    public currentYear = new Date().getFullYear();

    constructor(private es: ElectronService) {}

    public ngOnInit(): void {
        this.versions = process.versions;
        this.platform = 'Windows';
    }

    public openWebUrl() {
        this.shell.openExternal(LINKS.PROFILE);
    }
}
