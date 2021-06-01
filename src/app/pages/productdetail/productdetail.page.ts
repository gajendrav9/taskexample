import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Platform,NavController,LoadingController,ToastController,MenuController,ModalController  } from '@ionic/angular';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

  productDetail:any;
  constructor(private router: Router,private route: ActivatedRoute, private toastCtrl: ToastController,public storageService:StorageService,) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.productDetail = this.router.getCurrentNavigation().extras.state.pageType;
        if(this.productDetail.MainCategory=='DFC')
        {
          this.collectPoints(3);
        }else{
          this.collectPoints(5);
        }
       
      }
    });
  }

  collectPoints(MaxCategory:Number )
  {
    this.storageService.setCollectItem( this.productDetail,MaxCategory).then(result => {
      if (result != null) {
      console.log('Username: '+ JSON.stringify(result));
       if(!result)
       {
         this.presentToast("Already  you collect.");
       }else{
        this.presentToast("Points Collected");
       }
      }
      }).catch(e => {
      console.log('error: '+ e);
      // Handle errors here
      });  

  }

  async presentToast(msg:any) {
    const toast =await  this.toastCtrl.create({
      message: msg,
      duration: 800
    });
    toast.present();
  }
 
  ngOnInit() {
  }

}
