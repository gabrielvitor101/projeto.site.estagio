import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  musics = [];

  constructor(private router: Router, private musicService:MusicService) { 
    this.musics = musicService.getAllMusics();
  }


  ngOnInit() {

  }

}
