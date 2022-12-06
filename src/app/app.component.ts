import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  websiteList: any = ['Javatpoint.com', 'HDTuto.com', 'Tutorialandexample.com']

  userId: any = ""
  password: any = ""
  
  personDetails: any = []

  onSubmit(event: any) {
    let details = {
      "userId": this.userId,
      "password": this.password,
     
    }
    this.personDetails.push(details)
    this.userId = ""
    this.password = ""
     }
}
