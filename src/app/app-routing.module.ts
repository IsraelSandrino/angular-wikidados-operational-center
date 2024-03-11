import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'scripts', loadChildren: () => import('./pages/scripts/scripts.module').then(m => m.ScriptsModule) },
      { path: 'devices', loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesModule) },
      { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule) },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
