import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { CrudProvider } from '../../providers/crud/crud';

import { EditPage } from '../edit/edit';
import { InsertPage } from '../insert/insert';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mydata:any
  constructor(public navCtrl: NavController,
    public crudProvider:CrudProvider,
    public authService: AuthProvider) {

      this.crudProvider.getPosts().then((data) => {
     
        this.mydata = data["data"] 
        console.log( this.mydata)
      })
    

  }

doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



  onEdit( id, name, details){

    console.log("hoe edit info: "+id  +   details)
    
this.navCtrl.push(EditPage, {

  id:id, 
  name:name, 
  details:details, 
  

})
    
}

  inserPage(){
    this.navCtrl.push(InsertPage)
  }





  onDelete(id){


    this.crudProvider.deletePosts( id ).then((result)=>{
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("Delete this.id: "+ id)
    })
 

  }

  myLogOut(){
  this.authService.logout();
  this.navCtrl.setRoot(LoginPage);
}




}
