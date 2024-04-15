import { Component } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {IDrinkDetails} from "../../models/drink.model";
import {ActivatedRoute} from "@angular/router";
import {DrinkService} from "../../services/drink.service";
import {getAvailableLanguages, getIngredients} from "../../utils/drink";

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent {
  drinkDetails$!: Observable<IDrinkDetails | null>;
  private drinkDetailsSubscription$!: Subscription;
  availableLanguages: string[] = [];
  ingredients: string[] = [];
  selectedLanguage = 'en';
  instructions = '';

  constructor(
    private _route: ActivatedRoute,
    private _drinkService: DrinkService
  ) {
  }

  ngOnInit() {
    const drinkId: string | null = this._route.snapshot.paramMap.get('drinkId');
    this.drinkDetails$ = this._drinkService.drinkDetails$;
    this.drinkDetailsSubscription$ = this._drinkService
      .getDrinkDetails(drinkId)
      .subscribe((drinkDetails: IDrinkDetails) => {
        if (drinkDetails) {
          this.availableLanguages = getAvailableLanguages(drinkDetails);
          this.ingredients = getIngredients(drinkDetails);
        }
      });
  }

  ngOnDestroy() {
    this.drinkDetailsSubscription$.unsubscribe();
  }

  onLanguageChange(drink: IDrinkDetails) {
    const instructions =
      drink[`strInstructions${this.selectedLanguage.toUpperCase()}` as keyof IDrinkDetails];
    this.instructions = instructions || 'No instructions available in this language';
  }
}
