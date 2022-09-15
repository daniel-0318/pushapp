import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PushService } from './services/push.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private pushService: PushService) {
    this.initializeApp();

  }

  initializeApp(){
    this.platform.ready().then(() => {
     this.pushService.configuracionInicial();
    });
  }
}
