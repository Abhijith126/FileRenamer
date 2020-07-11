import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'File Renamer';
    public subtitle = 'Rename bulk files based on preferred Prefix/Show name';
    public note = 'Note: All numbers/episode numbers will be retained. Apart from excluded string*';

    constructor(private es: ElectronService) {
        const template = [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Open',
                        click: () => {
                            // console.log('clocked');
                        },
                    },
                ],
            },
        ];

        const menu = this.es.remote.Menu.buildFromTemplate(template);
        this.es.remote.Menu.setApplicationMenu(menu);
    }
}
