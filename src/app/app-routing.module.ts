import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProcessComponent } from './components/process/process.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'process', component: ProcessComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
