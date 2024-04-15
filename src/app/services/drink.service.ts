import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {IDrink, IDrinkDetails} from "../models/drink.model";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private _http: HttpClient = inject(HttpClient)
  private drinksSubject = new BehaviorSubject<IDrink[]>([]);
  drinks$: Observable<IDrink[]> = this.drinksSubject.asObservable();
  private drinkDetailsSubject = new BehaviorSubject<IDrinkDetails | null>(null);
  drinkDetails$: Observable<IDrinkDetails | null> = this.drinkDetailsSubject.asObservable();

  getDrinks(): Observable<IDrink[]> {
    return this._http
      .get<{ drinks: IDrink[] }>(
        '/filter.php?a=Alcoholic'
      )
      .pipe(
        map((response) => response.drinks),
        tap((drinks) => this.drinksSubject.next(drinks))
      );
  }

  getDrinkDetails(id: string | null): Observable<IDrinkDetails> {
    const url = `/lookup.php?i=${id}`;
    return this._http.get<{ drinks: IDrinkDetails[] }>(url).pipe(
      map((response: { drinks: IDrinkDetails[] }) => response.drinks[0]),
      tap((drinkDetails) => this.drinkDetailsSubject.next(drinkDetails))
    );
  }
}
