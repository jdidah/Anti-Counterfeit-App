import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  consumers: any;
  wholesalers: any;
  manufacturers: any;
  retailers: any;
  users: any;
  assets: any;

  constructor(
    public https: HttpService
  ) { }

  fetchWholesalers() {
    this.https.fetchRecordByURL(environment.createWholesaler)
    .subscribe((resp: any) => {
      this.wholesalers = resp;
    });
  }

  fetchConsumers() {
    this.https.fetchRecordByURL(environment.createConsumer)
    .subscribe((resp: any) => {
      this.consumers = resp;
    });
  }

  fetchManufacturers() {
    this.https.fetchRecordByURL(environment.manufacturer)
    .subscribe((resp: any) => {
      this.manufacturers = resp;
    });
  }

  fetchRetailers() {
    this.https.fetchRecordByURL(environment.createRetailer)
    .subscribe((resp: any) => {
      this.retailers = resp;
    });
  }

  fetchAssets() {
    this.https.fetchRecordByURL(environment.manufacturePhone)
    .subscribe((resp: any) => {
      this.assets = resp;
    });
  }

  fetchUsers() {
    this.https.fetchRecordByURL(environment.createSystemAdmin)
    .subscribe((resp: any) => {
      this.users = resp;
    });
  }
}
