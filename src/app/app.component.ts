import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text: string;
  menu: any;

  constructor() {
    this.menu = [
      {
        title: '模板',
        open: false,
        subTitle: false,
        items: [
          {
            title: '模板-1',
            subTitle: true
          }
        ]
      },
      {
        title: '模板',
        open: false,
        subTitle: false,
        items: [
          {
            title: '模板-1',
            subTitle: true
          }
        ]
      }
    ]
  }
}
