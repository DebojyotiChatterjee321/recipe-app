import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../model/recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Test recipe', 'A simple description for my recipe', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FPasta_salad_closeup.JPG%2F1200px-Pasta_salad_closeup.JPG&f=1&nofb=1')
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
