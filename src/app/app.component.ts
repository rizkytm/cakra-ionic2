import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OnboardingPage } from "../pages/onboarding/onboarding";


import { AuthProvider } from '../providers/auth/auth';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = OnboardingPage;



  constructor(
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
  
  
  
  
    this.authService.checkAuthentication().then((res)=>{
      console.log("res : " + res)
  
      if (res === '') {
        this.rootPage  = OnboardingPage;
      } else {
        this.rootPage  = TabsPage;
      }
      
    })
  
  
  
  
  
  
  }
}