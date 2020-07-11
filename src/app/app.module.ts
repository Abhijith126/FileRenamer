import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';
import { NgxFsModule } from 'ngx-fs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProcessComponent } from './components/process/process.component';
import { MaterialModule } from './modules/material.module';
import { FilerenamerService } from './service/filerenamer.service';

@NgModule({
    declarations: [AppComponent, HomeComponent, ProcessComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxElectronModule,
        NgxFsModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [FilerenamerService],
    bootstrap: [AppComponent],
})
export class AppModule {}
