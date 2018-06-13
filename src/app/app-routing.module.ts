import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistComponent } from './artist/artist.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { TesteComponent } from './teste/teste.component';
// import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes =[
  { path: 'playlist', component: PlaylistComponent},
  { path: 'artist', component: TesteComponent},
  { path: 'singup', component: SingupComponent},
  { path: 'login', component: LoginComponent},
  // { path: ':name', component: DetalheComponent},
  { path: '**', component: ContainerComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
