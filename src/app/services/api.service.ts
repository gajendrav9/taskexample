import { Injectable } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders,HttpRequest   } from '@angular/common/http';
import { tap,map } from 'rxjs/operators';
import { Platform, LoadingController } from '@ionic/angular';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

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

  listData=[
    {
      "ProductName":"Pro X","Category":"Super","ProductID":"23","MainCategory":"DFC","Points":"20"
    },
    {
      "ProductName":"Pro wX","Category":"Super","ProductID":"233","MainCategory":"DFC","Points":"10"
    },
    {
      "ProductName":"Pro tX","Category":"Super","ProductID":"223","MainCategory":"DFC","Points":"30"
    },  {
      "ProductName":"Pro Xg","Category":"Super","ProductID":"213","MainCategory":"DFC","Points":"40"
    },  {
      "ProductName":"Pro fX","Category":"Super","ProductID":"243","MainCategory":"DFC","Points":"60"
    },  {
      "ProductName":"Pro eX","Category":"Super","ProductID":"253","MainCategory":"DFC","Points":"80"
    },  {
      "ProductName":"Pro dX","Category":"Super","ProductID":"263","MainCategory":"DFC","Points":"90"
    },  {
      "ProductName":"Pro sX","Category":"Super","ProductID":"273","MainCategory":"DFC","Points":"10"
    },  {
      "ProductName":"Pro sX","Category":"Super","ProductID":"233","MainCategory":"DFC","Points":"70"
    },{
      "ProductName":"Pro sffX","Category":"Super","ProductID":"253","MainCategory":"DFC","Points":"80"
    }
  ]

  listDataB=[
    {
      "ProductName":"TR X","Category":"Multi","ProductID":"13","MainCategory":"SNN","Points":"203"
    },
    {
      "ProductName":"TR wX","Category":"Multi","ProductID":"133","MainCategory":"SNN","Points":"260"
    },
    {
      "ProductName":"TR tX","Category":"Multi","ProductID":"123","MainCategory":"SNN","Points":"290"
    },  {
      "ProductName":"TR Xg","Category":"Multi","ProductID":"113","MainCategory":"SNN","Points":"210"
    },  {
      "ProductName":"TR fX","Category":"Multi","ProductID":"143","MainCategory":"SNN","Points":"250"
    },  {
      "ProductName":"TR eX","Category":"Multi","ProductID":"153","MainCategory":"SNN","Points":"210"
    },  {
      "ProductName":"TR dX","Category":"Multi","ProductID":"163","MainCategory":"SNN","Points":"240"
    },  {
      "ProductName":"TR sX","Category":"Multi","ProductID":"173","MainCategory":"SNN","Points":"230"
    },  {
      "ProductName":"TR sX","Category":"Multi","ProductID":"133","MainCategory":"SNN","Points":"220"
    },{
      "ProductName":"TR sffX","Category":"Multi","ProductID":"153","MainCategory":"SNN","Points":"120"
    }
  ]

}
