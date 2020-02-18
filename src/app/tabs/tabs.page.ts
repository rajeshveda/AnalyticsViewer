import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public cred: string = '';

  constructor(
    private storage: Storage,
    private navCtrl: NavController
  ) {

    this.storage.get('login').then(data => {
      console.log('login data', data);
      this.cred = data;
      if (!this.cred || this.cred == '') {
        console.log(this.cred)
        this.navCtrl.navigateForward('login');
      }
    });

  }

  ionViewDidEnter() {
  }

}
