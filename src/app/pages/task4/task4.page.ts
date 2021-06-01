import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././../services/api.service';
import { first } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.page.html',
  styleUrls: ['./task4.page.scss'],
})
export class Task4Page implements OnInit {

  ListType:any;
  dataList:any[]=[];
  fetchData:any;
  TotalPoints:any=0;
  constructor(private authService:ApiService,private route: ActivatedRoute,private router: Router,public storageService:StorageService,) {
    this.ListType='listA';
    this.getListB();
    this.count();

   }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
   // console.log('Segment changed', this.alertListType);
    if(this.ListType=="listB")
    {
      
      this.dataList=[];
      this.getListA();
    }else if(this.ListType=="listA"){
     
      this.dataList=[];
      this.getListB();

    }
  }
  getListA()
  {
    this.dataList=this.authService.listData;

  }

  getListB()
  {
    this.dataList=this.authService.listDataB;
     
  }

  ionViewWillEnter ()
  {
   
  }
  showpopupedit(card)
  {
    //alert("alert");
    if(this.ListType=="listB")
    {
      
      let navigationExtras: NavigationExtras = {
        state: {
          pageType:card,
        }
      };
      this.router.navigate(['productdetail'], navigationExtras);

    }
    if(this.ListType=="listA"){
     
      let navigationExtras: NavigationExtras = {
        state: {
          pageType:card
        }
      };
     this.router.navigate(['productdetail'], navigationExtras);
    }
    
  }

  count()
  {
   // this.TotalPoints=this.storageService.getitemcount();
    //console.log("count",this.storageService.getitemcount());
  }
}
