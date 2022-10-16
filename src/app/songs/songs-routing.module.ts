import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsLayoutComponent } from './components/songs-layout/songs-layout.component';

const routes: Routes = [
  { path: 'songs', component: SongsLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
