import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'platzisquare';


  lat:number = -12.0728179;
  lng:number = -75.2037825;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
     lugaresService.getLugares()
         .valueChanges().subscribe(lugares =>{
           this.lugares = lugares;
     });
   }

  ngOnInit() {
  }

}
