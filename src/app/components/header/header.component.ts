import {Component, inject, OnInit} from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {Location} from '@angular/common';
import {IConfiguration} from "../../models/configuration.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  brand!: IConfiguration;
  backIconUrl: string = '../../../assets/icons/back.svg';
  currentRoute: string = '';
  private configService = inject(ConfigService);
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)
  private location = inject(Location)

  ngOnInit(): void {
    this.brand = this.configService.getBrandingConfig();
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
