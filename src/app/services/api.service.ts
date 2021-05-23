import { Injectable } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders,HttpRequest   } from '@angular/common/http';
import { tap,map } from 'rxjs/operators';
import { Platform, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//54c830d240984ecca27dda1ac6bfea61
private API_KEY="54c830d240984ecca27dda1ac6bfea61";
private API_URL = 'https://newsapi.org/v2/';
isLoading = false;
  constructor(  private http: HttpClient,
   public loadingController: LoadingController,//private httpnative: HTTP
   ) {


   }

   
  public getNewList() {
    return this.http.get(this.API_URL + 'everything?q=Apple&from=2021-05-23&sortBy=popularity&apiKey='+this.API_KEY
    ).pipe(map(user => {
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      //alert(JSON.stringify(user));
      return user;
  }));
  
  }

  
 public async present() {
  this.isLoading = true;
  return await this.loadingController.create({
    duration: 2000,
    message: 'Please wait...'
  }).then(a => {
    a.present().then(() => {
      console.log('presented');
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort presenting'));
      }
    });
  });
}


public async dismiss() {
  this.isLoading = false;
  return await this.loadingController.dismiss().then(() => console.log('dismissed'));
}
}
