import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  public music = [
    {
      name: "Toxity",
      id: "1",
      artist: "System of Down",
      link: "https://www.youtube.com/embed/iywaBOMvYLI", 
      img: "../assets/system album.jpg",
      genero: "rock",
    },
  
    {
      name: "Sweet child o mine",
      id: "2",
      artist: "Guns n roses",
      link: "https://www.youtube.com/embed/iywaBOMvYLI",
      img: "../assets/system album.jpg",
      genero: "rock",
    },

    {
      name: "Hurt",
      id: "3",
      artist: "Johnny cash",
      link: "https://www.youtube.com/embed/iywaBOMvYLI", 
      img: "../assets/system album.jpg",
      genero: "Rock",
    }
  
  ];
  constructor() { }
    public getAllMusics(){
      return this.music;
    }
  public getbyName(name){
    return this.music.find(p => p.name === name);
  
  }

  public getbyId(id){
    return this.music.find(p => p.id === id);
  
  }
}
