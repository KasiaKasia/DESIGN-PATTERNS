import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Design Patterns';
  creational = [{
    title: 'Creational Patterns', link: 'creational-patterns',
    types: [{
      title: 'BUILDER', link: 'creational-patterns/builder',
    }, {
      title: 'PROTOTYPE', link: 'creational-patterns/prototype',
    }, {
      title: 'SIMPLE FACTORY', link: 'creational-patterns/simple-factory',
    }]
  }]
  behavioral = [{
    title: 'Behavioral Patterns', link: 'behavioral-patterns',
    types: [{
      title: 'CHAIN OF RESPONSIBILITY', link: 'behavioral-patterns/chain-of-responsibility',
    }, {
      title: 'ITERATOR', link: 'behavioral-patterns/iterator',
    }, {
      title: 'MEMENTO', link: 'behavioral-patterns/memento',
    }, {
      title: 'OBSERVER', link: 'behavioral-patterns/observer',
    }]
  }]
}
