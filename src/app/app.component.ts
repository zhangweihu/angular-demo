import { Component,OnInit  } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    // console.log(this.heroes);
    
  }
  onSelect(hero: Hero):void  {
     this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
