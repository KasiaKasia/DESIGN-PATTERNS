import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SlackDecoratorService } from './service/slack/slack-decorator.service';
import { NotifierDecoratorService } from './service/notifier/notifier-decorator.service';
import { FacebookDecoratorService } from './service/facebook/facebook-decorator.service';
import { Notifications, Notifier } from './service/notifier';


@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [FormsModule, NgFor],
  template: `
    <ul>
      <li *ngFor="let item of list">
          <input type="checkbox" [(ngModel)]="item.checked">{{item.title}}
      </li>
  </ul>

  <input type="text" (ngModelChange)="notificationContent = $event" [ngModel]="notificationContent" />
  <button (click)="sendNotification(notificationContent)">Notify</button>
  `,
 // templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.scss'
})
export class DecoratorComponent {

  list = [{
    id: 1,
    title: 'Facebook',
    checked: true,
  }, {
    id: 2,
    title: 'Slack',
    checked: false,
  }, {
    id: 3,
    title: 'Message',
    checked: true,
  },
  ]
  notificationContent = ''
  notifier: Notifier = new Notifications()

  sendNotification(message: string): void {
    let decoratedNotifier = this.notifier;

    if (this.list[0].checked) {
      console.log('FacebookDecoratorService decoratedNotifier ', decoratedNotifier)
      decoratedNotifier = new FacebookDecoratorService(decoratedNotifier);
    }
    if (this.list[1].checked) {
      console.log('SlackDecoratorService decoratedNotifier ', decoratedNotifier)

      decoratedNotifier = new SlackDecoratorService(decoratedNotifier);
    }
    if (this.list[2].checked) {
      console.log('NotifierDecoratorService decoratedNotifier ', decoratedNotifier)

      decoratedNotifier = new NotifierDecoratorService(decoratedNotifier);
    }

    decoratedNotifier.send(message);
  }
}
