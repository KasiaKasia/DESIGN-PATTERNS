import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StructuralPatternsModule } from './structural-patterns/structural-patterns.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, StructuralPatternsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Design Patterns';
}
