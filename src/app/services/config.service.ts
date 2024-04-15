import {Injectable} from '@angular/core';
import * as configData from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor() {
    this.loadConfig();
  }

  loadConfig() {
    this.config = configData;
  }

  getBrandingConfig() {
    return this.config.brand;
  }

  getBaseUrl() {
    return this.config.baseUrl;
  }
}
