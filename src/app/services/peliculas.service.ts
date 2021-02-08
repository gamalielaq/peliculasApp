import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(
    private _http: HttpClient
  ) { }

  getCartelera(): Observable<CarteleraResponse> {
    return this._http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=0a78e905195ddd8076496657e12145c3&language=en-US&page=1');
  }
}
