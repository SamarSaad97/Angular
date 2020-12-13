import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
new Recipe( 'Test Recipe','recipe description','https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg'

),
new Recipe( 'Test Recipe','recipe description','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/2/IG0509_panzanella_s4x3.jpg.rend.hgtvcom.826.620.suffix/1529943365287.jpeg'

)

];
  constructor() { }

  ngOnInit(): void {
  }

}
