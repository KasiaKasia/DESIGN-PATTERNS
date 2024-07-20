import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StructuralPatternsModule } from './structural-patterns/structural-patterns.module';
import { HttpClientModule } from '@angular/common/http';
import { CreationalPatternsModule } from './creational-patterns/creational-patterns.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterModule, 
 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Design Patterns';
  creational = [{
    title: 'Creational Patterns', link: 'creational-patterns',
    types: [{
      title: 'BUILDER', link: 'creational-patterns/builder',
    }]
  }]
}
