import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { NgxFsModule } from 'ngx-fs';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FilerenamerService } from './service/filerenamer.service';
import { ProcessComponent } from './components/process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxElectronModule,
    NgxFsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [FilerenamerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
