import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userid: string = '';
  public password: string = '';
  public errorMsg: string = '';
  constructor(private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  validateLogin() {
    console.log(this.userid, this.password);
    if (this.userid != this.password) {
      this.errorMsg = 'Invalid credentials please try again';
    }
    else {

      this.storage.set('login', this.userid).then(data => {
        this.navCtrl.setDirection('root', false);
        this.navCtrl.navigateRoot('')
      })


    }
  }


}
