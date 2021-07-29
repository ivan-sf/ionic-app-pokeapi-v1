import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
HttpClient
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idPokemon;
  pokemonAbilities;
  pokemonForms;
  pokemonTypes;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http : HttpClient
  ) { } 

  ngOnInit() {
    this.idPokemon=this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/"+this.idPokemon)
      .subscribe(res=>{
        this.pokemonAbilities = res.abilities;
        this.pokemonForms = res.forms;
        this.pokemonTypes = res.types;
      })
  }

}
