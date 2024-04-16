import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {Location} from '@angular/common';
import {IConfiguration} from "../../models/configuration.model";
import {CheckRouteDirective} from "../../directives/check-route.directive";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  brand!: IConfiguration;
  logoUrl!: string;
  backIconUrl: string = "assets/icons/back.svg";
  currentRoute: string = '';
  private configService = inject(ConfigService);
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)
  private location = inject(Location)

  @ViewChild(CheckRouteDirective, {static: true}) checkRouteDirective!: CheckRouteDirective;

  ngOnInit(): void {
    this.brand = this.configService.getBrandingConfig();
    this.logoUrl = this.brand.logoUrl;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
    });
  }

  goBack(): void {
    this.location.back();
  }
}
