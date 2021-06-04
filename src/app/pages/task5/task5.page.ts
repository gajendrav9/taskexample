import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { CalendarModal, CalendarModalOptions,DayConfig,CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { StorageService } from 'src/app/services/storage.service';
import { Platform,NavController,LoadingController,ToastController,MenuController  } from '@ionic/angular';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.page.html',
  styleUrls: ['./task5.page.scss'],
})
export class Task5Page implements OnInit {

  isInvoiceCreate:boolean=false;
  newCreatedInvoice:any;
  today: any = new Date();
  minDate: any =  (new Date()).getMonth() - 3;
  maxDate : any = new Date().toISOString();
  newBarcodeInvoice:any;
  formatedDate:any;
  itemBarcode:any;
  saleItemList:any[]=[];

  itemData={
    itemBarcode :'',
    dateofentry:'',
   }
   tempsubmit={
    invoiceno :'',
    itemlist:null
   }
  
  constructor(public barcodeCtrl: BarcodeScanner,public storageService:StorageService,
    public dms: DomSanitizer,public modalCtrl: ModalController,private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  display(b64: string) {
    return this.dms.bypassSecurityTrustUrl(b64);
  }
  createinvoice()
  {
    if(this.isInvoiceCreate)
    {
      this.isInvoiceCreate=false;
      this.newCreatedInvoice=null;
      this.formatedDate=null;
      this.itemBarcode=null;
      this.saleItemList=[];
    }
    else
    {
      this.isInvoiceCreate=true;
      var d = new Date();
      //var n = d.getMilliseconds();
     
        this.newCreatedInvoice='XT'+d.getDate()+d.getMonth()+d.getHours()+d.getMinutes()+d.getSeconds()+d.getMilliseconds();
        console.log( this.newCreatedInvoice);
        // this.barcodeCtrl.encode(this.barcodeCtrl.Encode.TEXT_TYPE,  this.newCreatedInvoice).then((encodedData) => {
        //   console.log(encodedData);
        //   this.newBarcodeInvoice = encodedData;
        //   alert(JSON.stringify(this.newBarcodeInvoice));
        // }, (err) => {
        //   console.log('Error occured : ' + err);
        // });
    }

  }
  scan()
  {
    this.barcodeCtrl.scan().then(data => {
      // this is called when a barcode is found
      this.itemBarcode = data.text
    });    
  }
  async openCalendar() {
    console.log(this.today);
    var d = new Date();
    const options: CalendarModalOptions = {
      title: 'Select Date',
      color:'danger',
     // canBackwardsSelected:true,
    //  daysConfig: _daysConfig
      from:new Date(d.getFullYear(),d.getMonth()-3,d.getDate()),
      to:new Date(),   
     // defaultEndDateToStartDate:true
     
    };

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options }
  });

  myCalendar.present();
  const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
    this.formatedDate = moment(date.string).format("DD-MM-YYYY");
}

createSaleItem()
{
  if(this.formatedDate ==null)
  {
   alert("Please Select Date of entry");
  }else if(this.itemBarcode==null)
  {
    alert("Enter Item Barcode");
  }else
  {
    var d = new Date();
    this.itemData={
      itemBarcode :'',
      dateofentry:'',
     }
    
    this.itemData.dateofentry=this.formatedDate;
    this.itemData.itemBarcode=this.itemBarcode+d.getDate()+d.getMonth()+d.getHours()+d.getMinutes()+d.getSeconds()+d.getMilliseconds();
    this.saleItemList.push(this.itemData);
  }
 
}

saveinvoice()
{
  this.tempsubmit.invoiceno=this.newCreatedInvoice;
  this.tempsubmit.itemlist=this.saleItemList;
  this.storageService.addInvoiceStorage(this.tempsubmit).then(result => {
    if (result != null) {
    console.log('Username: '+ JSON.stringify(result));
     if(result)
     {
       this.presentToast("Invoice added Successfully !");
       this.tempsubmit={
        invoiceno :'',
        itemlist:null
       }
       this.isInvoiceCreate=false;
       this.newCreatedInvoice=null;
       this.formatedDate=null;
       this.itemBarcode=null;
       this.saleItemList=[];
     }else{
      this.presentToast("Invoice not added");
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
}
