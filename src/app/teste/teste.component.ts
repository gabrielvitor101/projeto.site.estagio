import { Component, OnInit } from '@angular/core';
import { TesteService} from 'src/app/teste.service';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  dados: any = [] ;
  constructor(private testeService: TesteService) { 

  }

  ngOnInit() {
    this.testeService.getAllCats()
   .subscribe(
     data => {
      this.dados = data;
     }
   
   )};

}
