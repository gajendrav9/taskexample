import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { visitorInfo } from 'src/app/modals/visitorInfo';
import { Platform,NavController,LoadingController,ToastController,MenuController,ModalController  } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.page.html',
  styleUrls: ['./task1.page.scss'],
})
export class Task1Page implements OnInit {
  form: FormGroup;
  tempSubmit:visitorInfo=new visitorInfo();
  today: string = new Date().toISOString();

  constructor(private fb: FormBuilder,public storageService:StorageService,private toastCtrl: ToastController,) { 
    this.forminit();
  }

  forminit()
  {
    let formatedDate =moment(this.today).format("DD/MM/YYYY");
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      typeOfVisit: ['', Validators.required,Validators.minLength(3)],
      personToVisit: ['', Validators.required,Validators.minLength(3)],
      timeOfEntry: ['', Validators.required,Validators.minLength(2)],
      timeOfExit: ['', Validators.required,Validators.minLength(2)],
      dateOfEntry :[formatedDate, Validators.required],
    });
  }

  ngOnInit() {
  }

  submit()
  {

    this.tempSubmit=new visitorInfo();
    this.tempSubmit.name=this.form.get('name').value;
    this.tempSubmit.email=this.form.get('email').value;//
    this.tempSubmit.typeOfVisit=this.form.get('typeOfVisit').value;//
    this.tempSubmit.personToVisit=this.form.get('personToVisit').value;
    this.tempSubmit.timeOfEntry=  moment(this.form.get('timeOfEntry').value).format("HH:mm");
    this.tempSubmit.timeOfExit=moment(this.form.get('timeOfExit').value ).format("HH:mm");;//Available
    this.tempSubmit.dateOfEntry=this.form.get('dateOfEntry').value;

    this.storageService.addItemStorage(this.tempSubmit).then(result => {
      if (result != null) {
      console.log('Username: '+ JSON.stringify(result));
       if(result)
       {
         this.presentToast("Visitor Information added Successfully !");
         this.forminit();
       }else{
        this.presentToast("Information not added");
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
