import { Component } from '@angular/core';
import { PokeServiceService } from './poke-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poke Service';
  constructor(private _httpService: PokeServiceService){
    console.log("POKE BALLS")
  
  }
  
}
