import { Component } from '@angular/core';
import { File } from '@ionic-native/File/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public filename: any;

  constructor(private file: File, private toast: ToastController) { }


  startUpload(imgEntry) {

    console.log(this.filename);

    if (!this.filename) {
      this.showToast('Please choose a file');
    }
    else {
      this.showToast('File Upload successful');
    }

    // this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
    //   .then(entry => {
    //     this.showToast('File uploaded successfully')
    //     //  ( < FileEntry > entry).file(file => this.readFile(file))
    //   })
    //   .catch(err => {
    //     // this.presentToast('Error while reading file.');
    //   });
  }

  showToast(msg) {
    this.toast.create({ message: msg, duration: 2000 }).then(toastData => {
      toastData.present();
    })

  }

}
