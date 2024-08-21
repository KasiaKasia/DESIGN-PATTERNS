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
  templateUrl: './decorator.component.html',
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
  constructor() { }


  sendNotification(message: string): void {
    let decoratedNotifier = this.notifier;

    if (this.list[0].checked) {
      decoratedNotifier = new FacebookDecoratorService(decoratedNotifier);
    }
    if (this.list[1].checked) {
      decoratedNotifier = new SlackDecoratorService(decoratedNotifier);
    }
    if (this.list[2].checked) {
      decoratedNotifier = new NotifierDecoratorService(decoratedNotifier);
    }

    decoratedNotifier.send(message);
  }

}
