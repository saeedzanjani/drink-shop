import {inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from "../services/config.service";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _configService = inject(ConfigService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = this._configService.getBaseUrl();
    const apiRequest = request.clone({
      url: `${baseUrl}${request.url}`
    });
    return next.handle(apiRequest);
  }
}
