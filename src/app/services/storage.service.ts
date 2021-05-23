import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  itmeList:any[]=[];
  constructor(private storage: Storage)
   {
    console.log('Your storage provider is working here !');
    this.itmeList=[];
   }


   // set a key/value
 async set(key: string, value: any): Promise<any> {
  try {
  const result = await this.storage.set(key, value);
  console.log('set string in storage: ' + result);
  return true;
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }

  // to get a key/value pair
async get(key: string): Promise<any> {
  try {
  const result = await this.storage.get(key);
  console.log('storageGET: ' + key + ': ' + result);
  if (result != null) {
  return result;
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }

  // set a key/value object
async setObject(key: string, object: Object) {
  try {
  const result = await this.storage.set(key, JSON.stringify(object));
  console.log('set Object in storage: ' + result);
  
  return true;
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }

  
   // set a key/value object
async setCartObject(cart:any): Promise<any> {
  try {

 

   
   console.log("333",JSON.stringify(this.itmeList));
  return this.itmeList.length;
  } catch (reason) {
  console.log(reason);
  return this.itmeList.length;
  }
  }



     // set a key/value object
async addItemStorage(cart:any): Promise<any> {
  try {
    if(this.itmeList.length==0)
    {
      this.itmeList.push(cart);
      console.log("1",this.itmeList);
      return true;
    }else
    {
      let added = false;
    
      if (!added) {
        console.log("4",this.itmeList);
        this.itmeList.push(cart);
        return true;
      }else{
        return false;
      }
    
    }
   
   console.log("333",JSON.stringify(this.itmeList));
  return false;
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }




 


    
    // set a key/value object


  async getitemlist() {
    try {
  
      console.log("count",this.itmeList.length);
     
      if (this.itmeList.length != 0) {
        return this.itmeList;
        }else{
          return null;
        }
     console.log("333",JSON.stringify(this.itmeList));
    return null;
    } catch (reason) {
    console.log(reason);
    return null;
    }
    }

 


  // get a key/value object
async getObject(key: string): Promise<any> {
  try {
  const result = await this.storage.get(key);
  if (result != null) {
  return JSON.parse(result);
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }

  // remove a single key value:
  remove(key: string) {
  this.storage.remove(key);
  }
  //  delete all data from your application:
  clear() 
  {
  this.storage.clear();
  }


}
