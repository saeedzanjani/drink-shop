import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {IDrink} from "../../../models/drink.model";

@Component({
  selector: 'app-drink-items',
  templateUrl: './drink-items.component.html',
  styleUrls: ['./drink-items.component.scss']
})
export class DrinkItemsComponent {

  @Input() drinks!: Observable<IDrink[]>;

}
