import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  heroes: string[]=["Spiderman", "Ironman", "Hulk", "Thor"];
  heroDeleted: string="";
  deleteHero(){
    this.heroDeleted = this.heroes.shift() || "";
  }
}
