import { Routes } from '@angular/router';
import { StoreLayoutComponent } from './pages/layout/store-layout/store-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: StoreLayoutComponent,
    children: [{ path: '', component: HomeComponent }]
  },
  { path: '**', redirectTo: '' }
];
