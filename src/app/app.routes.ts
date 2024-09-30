import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'behavioral-patterns',
    loadChildren: () => import('./behavioral-patterns/behavioral-patterns.module').then(s => s.BehavioralPatternsModule)
}, {
    path: 'creational-patterns',
    loadChildren: () => import('./creational-patterns/creational-patterns.module').then(c => c.CreationalPatternsModule)
}, {
    path: 'structural-patterns',
    loadChildren: () => import('./structural-patterns/structural-patterns.module').then(s => s.StructuralPatternsModule)
}];
