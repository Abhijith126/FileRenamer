import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';

import { LINKS, TEXTS } from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = TEXTS.TITLE;
    public subtitle = TEXTS.SUBTITLE;

    constructor(private es: ElectronService, private router: Router, private ngZone: NgZone) {
        const shell = this.es.shell;
        const remote = this.es.remote;
        const isMac = process && process.platform === 'darwin';
        const template: Electron.MenuItemConstructorOptions[] = [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Home',
                        click: () => this.ngZone.run(() => this.router.navigate([''])),
                    },
                    {
                        role: isMac ? 'close' : 'quit',
                    },
                ],
            },
            {
                label: 'Edit',
                submenu: [{ role: 'cut' }, { role: 'copy' }, { role: 'paste' }],
            },
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'How to',
                        click: () => shell.openExternal(LINKS.HOW_TO),
                    },
                    { type: 'separator' },
                    {
                        label: 'Documentation',
                        click: () => shell.openExternal(LINKS.DOCS),
                    },
                    {
                        label: 'Github',

                        click: () => shell.openExternal(LINKS.GITHUB),
                    },
                    { type: 'separator' },
                    {
                        label: 'About',
                        click: () => this.ngZone.run(() => this.router.navigate(['about'])),
                    },
                ],
            },
        ];

        const menu = remote.Menu.buildFromTemplate(template);
        remote.Menu.setApplicationMenu(menu);
    }
}
