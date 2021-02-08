import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor( private _ps: PeliculasService ) { }

  ngOnInit(): void {
    this._ps.getCartelera().subscribe( (resp) => {
      this.movies = resp.results;
    })
  }

}
