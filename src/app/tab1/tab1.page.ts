import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public userName: string = 'Guest';
  public isLoggedin: boolean = false;

  constructor(private storage: Storage, private navCtrl: NavController) {

    this.storage.get('login').then(data => {
      this.userName = data;
      this.isLoggedin = true;
    })

  }

  logout() {
    this.storage.set('login', null).then(data => {
      this.navCtrl.navigateRoot('login');
    })
  }

}
