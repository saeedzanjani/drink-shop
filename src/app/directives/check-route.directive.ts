import {AfterViewChecked, AfterViewInit, Directive, inject, Input, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Directive({
  selector: '[appCheckRoute]',
})
export class CheckRouteDirective implements OnInit {

  @Input() appCheckRoute!: string;

  private _checkRoute!: boolean;
  private _router = inject(Router);

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this._checkRoute = this.checkRoute;
      }
    });
  }

  get checkRoute() {
    return this.appCheckRoute === this.getRoute();
  }

  private getRoute() {
    return this._router.url;
  }
}
