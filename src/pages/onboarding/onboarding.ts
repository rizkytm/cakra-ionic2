import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {
  
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  start(){
    this.navCtrl.push(LoginPage);
  }

   
  getNext(){
    this.slides.slideNext();
  }
   getPrev(){
    this.slides.slidePrev()
  }
}
