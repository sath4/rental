import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentTitle="I AM APP COMPONENT FROM COMPONENT.TS";

  clickHandler() {
    alert("I AM CLICKED");
  }

}
