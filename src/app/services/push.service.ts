import { Injectable } from '@angular/core';

// import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import OneSignal from 'onesignal-cordova-plugin';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor() { }

  configuracionInicial(){
    console.log("configuracionInicial");

     // Uncomment to set OneSignal device logging to VERBOSE  
  
    // OneSignal.setLogLevel(6, 0);
  
  
  
    // NOTE: Update the setAppId value below with your OneSignal AppId.
  
    OneSignal.setAppId("c3533ce5-2d82-41eb-923e-651cc36832d6");
  
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
  
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  
    });
  
  
  
    // iOS - Prompts the user for notification permissions.
  
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
  
        console.log("User accepted notifications: " + accepted);
  
    });
  }
}
