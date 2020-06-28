import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { FilerenamerService } from 'src/app/service/filerenamer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileInputsForm;
  files = ['[AnimeRG] Dragon Ball Z - 271 [720p] [x265] [pseudo]', '[AnimeRG] Dragon Ball Z - 272 [720p] [x265] [pseudo]', '[AnimeRG] Dragon Ball Z - 001 [720p] [x265] [pseudo]', '[AnimeRG] Dragon Ball Z - 01 [720p] [x265] [pseudo]', '[AnimeRG] Dragon Ball Z - 2 [720p] [x265] [pseudo]', '[AnimeRG] Dragon Ball Z - 25 [720p] [x265] [pseudo]', '[AnimeRG] Dragon Ball Z - 70 [720p] [x265] [pseudo]'];
  constructor(private es: ElectronService, private zone: NgZone, private frService: FilerenamerService) { }

  ngOnInit() {
    this.fileInputsForm = new FormGroup({
      'folderName': new FormControl('', Validators.required),
      'filePrefix': new FormControl('', Validators.required)
    });
  }

  browse() {
    const folderPath = this.es.remote.dialog.showOpenDialog({ title: 'Select a folder', properties: ['openDirectory'] })
    if (folderPath === undefined) {
      console.log("You didn't select a folder");
      return;
    }
    this.fileInputsForm.get('folderName').setValue(folderPath);
  }

  executeProcess() {
    this.frService.startProcess(this.fileInputsForm.get('folderName').value[0], this.fileInputsForm.get('filePrefix').value);
  }

  editFilename() {
    this.files.forEach(file => {
      console.log(this.frService.fetchEpisodeNo(file))
    })
  }

}
