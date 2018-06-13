import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  public music;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MusicService,
    private routeNavegation: Route
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(e =>{
      const name = e['name'];
      this.music = this.service.getbyName(name);
    })
  }

}
