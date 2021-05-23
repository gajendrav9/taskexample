import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././../services/api.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.page.html',
  styleUrls: ['./task3.page.scss'],
})
export class Task3Page implements OnInit {

  fetchData:any;
  listData:any[]=[];
  constructor(private authService:ApiService) { 
    this.newslist();
  }

  ngOnInit() {
  }
  getTimeAMPMFormat(date) {
    let formatedDate =moment(date).format("MMMM Do YYYY, h:mm:ss a");
    return formatedDate;
  }
  newslist()
  {
    
   this.authService.present();

    this.authService.getNewList().pipe(first())
    .subscribe(
        data => {
          this.authService.dismiss();
            this.fetchData = data;
           
            if(this.fetchData.status=="ok")
            {
              this.listData=this.fetchData.articles;
            }else
            {
             alert("Data Not Available .")
            }
            // alert(JSON.stringify(this.data));
           // console.log(JSON.stringify(listData));
             
             
             
            console.log("bb");
      },
        error => {
          console.log("aaaa");
          this.authService.dismiss();
         //
         // this.presentToast("Please enter valid API key.");
       
        });
  }
}
