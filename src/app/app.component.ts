import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'File Renamer';
  subtitle = 'Rename bulk files based on preferred Prefix/Show name';
  note ="Note: All numbers/episode numbers will be retained. Apart from excluded string*"
}
