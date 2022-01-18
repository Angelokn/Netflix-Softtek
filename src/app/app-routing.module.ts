import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
// import { PermissionsGuard } from './services/auth/permissions.guard';

const routes: Routes = [
  {
    path: 'login',
    // component: LoginComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    // children: [
    //   {
    //     path: 'home',
    //     component: HomeComponent,
    //     canActivate: [PermissionsGuard]
    //   }
    // ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
