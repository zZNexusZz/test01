import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {
    console.log("test")
  }
  async _alert(){
    console.log("alert");
    const alert = await this.alertController.create({
      header : 'This Header',
      subHeader : 'This Sub Header',
      message : 'This test message'
    });
    await alert.present();
  }
    

}
