import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  pokestring = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private _http: HttpClient) {
    console.log("POKE BAALS")
    this.getPokemon();
    
  }
  getPokemon(){
    let bulbasaur = this._http.get(this.pokestring+'3/')
    bulbasaur.subscribe(data=>{

      console.log(data.name+" weighs "+data.weight+" pounds")

      console.log(data.name+"'s abilities include "+data.abilities[0].ability.name+" and "+data.abilities[1].ability.name)
      for (let abl of data.abilities){
 
        let ablSearch = this._http.get(abl.ability.url)
        ablSearch.subscribe(data=>{
          console.log(data['pokemon'].length+" pokemon share the ability "+data.name)
          
          for(let idx = 0; idx <data.pokemon.length;idx++){
            console.log(data.pokemon[idx].pokemon.name+" also has the ability "+data.name)
          }
        })
      }
    })
    
  }
  
}
