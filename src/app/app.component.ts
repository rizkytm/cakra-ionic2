import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CrudProvider } from '../providers/crud/crud';

import { TabsPage } from '../pages/tabs/tabs';
import { OnboardingPage } from "../pages/onboarding/onboarding";


import { AuthProvider } from '../providers/auth/auth';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ManagePage } from '../pages/manage_home/manage_home';
import { AboutPage } from '../pages/about/about';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController;

  rootPage: any = OnboardingPage;

  appMenuItems: Array<MenuItem>;



  constructor(
    public crudProvider:CrudProvider,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public authService: AuthProvider, ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });



   this.appMenuItems = [
     {title: 'Home', component: HomePage, icon: 'home'},
     {title: 'Diskusi anda', component: AboutPage, icon: 'contacts'},
     {title: 'Bantuan', component: AboutPage, icon: 'help-circle'}
   ];




    this.authService.checkAuthentication().then((res)=>{
      console.log("res : " + res)

      if (res === '') {
        this.rootPage  = OnboardingPage;
      } else {
        this.rootPage  = TabsPage;
      }

    })

  }

  myLogOut(){
  this.authService.logout();
  this.navCtrl.setRoot(LoginPage);
}

openPage(page) {
   // Reset the content nav to have just this page
   // we wouldn't want the back button to show in this scenario
   this.navCtrl.setRoot(page.component);
 }

}
