import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
/**
/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {


  myInfo = {

    user_id:'',
    cover:'',
    judul:'',
    isi:'',
    category_id:''

  }




  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider,
    public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }



  insertData(){

    this.crudProvider.insertPosts(this.myInfo).then((result)=>{
      console.log(result)
      this.navCtrl.pop()
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();
      loading.dismiss();

    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(this.myInfo))
    })


   }


}
