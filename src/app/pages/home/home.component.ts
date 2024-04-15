import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {IDrink} from "../../models/drink.model";
import {DrinkService} from "../../services/drink.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  drinks$!: Observable<IDrink[]>;
  private subscription$!: Subscription;
  private _drinkService = inject(DrinkService);

  ngOnInit() {
    this.subscription$ = this._drinkService.getDrinks().subscribe();
    this.drinks$ = this._drinkService.drinks$;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
