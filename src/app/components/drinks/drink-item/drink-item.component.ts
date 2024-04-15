import {Component, Input} from '@angular/core';
import {IDrink} from "../../../models/drink.model";

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.scss']
})
export class DrinkItemComponent {

  @Input() drink!: IDrink;

}
