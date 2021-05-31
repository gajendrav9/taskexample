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

  diffHours:Number=0;
  diffMinut:Number=0;

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
  public inputValidator(event: any) {
    console.log(event.target.value);
    //const pattern = /^[a-zA-Z0-9]*$/;  
    const pattern = /^[a-zA-Z? ]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
      // invalid character, prevent input
  
    }
  }
  validsubmit()
  {
    if(this.form.get('name').value=='')
    {
      alert('Please Fill Visitor Name');
    }else if(this.form.get('email').value=='')
    {
      alert('Please Fill Visitor Email');
    }else if(this.form.get('typeOfVisit').value=='')
    {
      alert('Please Select type of visit');
    }
    else if(this.form.get('personToVisit').value=='')
    {
      alert('Please Fill person to visit');
    }
    else if(this.form.get('timeOfEntry').value=='')
    {
      alert('Please Select time of Entry');
    }else if(this.form.get('timeOfExit').value=='')
    {
      alert('Please Select time of Exit');
    }else{
      let diff = moment(this.form.get('timeOfExit').value, 'HH:mm').diff(moment(this.form.get('timeOfEntry').value, 'HH:mm'));
      
    let d = moment.duration(diff);
    let hours =  Math.floor(d.asHours());
    let minutes = parseInt(moment.utc(diff).format("mm"));
    console.log('hour'+hours+'minu'+minutes);
    let totaltime =Math.floor(d.asHours()) + moment.utc(diff).format(":mm");
   // alert(totaltime)
    if(Math.sign(hours)> -1 && Math.sign(minutes)>-1){
     console.log(Math.sign(hours)+'rer'+ Math.sign(minutes));
     this.submit();
    }else 
    {
      console.log(Math.sign(hours)+'rer'+ Math.sign(minutes))
     alert("Please Select Exit time proper")
    }
     // this.submit();
    }
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
