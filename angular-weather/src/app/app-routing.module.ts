import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetail } from './app.detail';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'weather-detail/:id', component: AppDetail },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
