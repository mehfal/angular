import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
                <cars></cars>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Sales2 Management1';
}
