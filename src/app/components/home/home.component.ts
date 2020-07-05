import { Component, OnInit, NgZone } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ElectronService } from "ngx-electron";
import { FilerenamerService } from "src/app/service/filerenamer.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  fileInputsForm: FormGroup;
  files = [];

  constructor(
    private es: ElectronService,
    private frService: FilerenamerService
  ) {}

  ngOnInit() {
    this.fileInputsForm = new FormGroup({
      folderName: new FormControl("", Validators.required),
      filePrefix: new FormControl("", Validators.required),
    });
  }

  async browse() {
    const folderPathResp = await this.es.remote.dialog.showOpenDialog({
      title: "Select a folder",
      properties: ["openDirectory"],
    });
    const folderPath = folderPathResp && folderPathResp.filePaths[0];
    if (folderPath === undefined) {
      console.log("You have not selected any folder");
      return;
    }
    this.fileInputsForm.get("folderName").setValue(folderPath);
  }

  executeProcess() {
    this.frService.startProcess(
      this.fileInputsForm.get("folderName").value,
      this.fileInputsForm.get("filePrefix").value
    );
  }

  editFilename() {
    this.files.forEach((file) => {
      console.log(this.frService.fetchEpisodeNo(file));
    });
  }
}
