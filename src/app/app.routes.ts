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
    path: 'structural-patterns',
    loadChildren: () => import('./structural-patterns/structural-patterns.module').then(s => s.StructuralPatternsModule)
}];
