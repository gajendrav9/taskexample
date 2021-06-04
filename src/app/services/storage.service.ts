import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  itmeList:any[]=[];
  pointCollectList:any[]=[];
  invoiceList:any[]=[];
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
async setCollectItem(cart:any,maxcountA:Number): Promise<any> {
  try {
    if(this.pointCollectList.length==0)
    {
      this.pointCollectList.push(cart);
      console.log("1",this.pointCollectList);
      return true;
    }else
    {
      const CategoryCount= this.pointCollectList.filter(e=>e.MainCategory==cart.MainCategory).length;
      if(maxcountA>CategoryCount)
      {
         //return this.addNewPoint(cart).;
        // return true;
        return  this.addNewPoint(cart).then((value) => {
           console.log(value);
         return value;
         });
      }else
      {
        return false;
      }
      console.log(CategoryCount);
     
     
    }
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }

  async getitemcount() {
    try {
  
      console.log("count",this.pointCollectList.length);
     
      if (this.pointCollectList.length != 0) {
        let total=0;
        for(let k=0;k<this.pointCollectList.length;k++)
        {
          total+=parseInt(this.pointCollectList[k].Points);
        }
        console.log("333",total);
        return total;
        
        }
    
    return 0;
    } catch (reason) {
    console.log(reason);
    return 0;
    }
    }

 public  async addNewPoint(cart)
  {
    let added = false;
    for(let k=0;k<this.pointCollectList.length;k++)
    {
      if(this.pointCollectList[k].ProductID==cart.ProductID)
      {
      
       added=true;
       break;
      }
      
    }
    if (!added) {
      console.log("4",this.pointCollectList);
      this.pointCollectList.push(cart);
      return true;
    }else{
      return false;
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


  async addInvoiceStorage(cart:any): Promise<any> {
    try {
      if(this.invoiceList.length==0)
      {
        this.invoiceList.push(cart);
        console.log("1",this.invoiceList);
        return true;
      }else
      {
        let added = false;
      
        if (!added) {
          console.log("4",this.invoiceList);
          this.invoiceList.push(cart);
          return true;
        }else{
          return false;
        }
      
      }
     
    } catch (reason) {
    console.log(reason);
    return false;
    }
    }
  

 



    async getinvoicelist() {
      try {
    
        console.log("count",this.invoiceList.length);
       
        if (this.invoiceList.length != 0) {
          return this.invoiceList;
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
