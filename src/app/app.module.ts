import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { AppRoutingModule } from './/app-routing.module';
import { TesteComponent } from './teste/teste.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    PlaylistComponent,
    SingupComponent,
    LoginComponent,
    ArtistComponent,
    TesteComponent,
    // DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
