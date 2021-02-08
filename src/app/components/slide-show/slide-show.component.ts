import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input() movies:Movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
    
  }
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
    })

  }

}
