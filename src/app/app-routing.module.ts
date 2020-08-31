import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/landing/landing.module').then( module => module.LandingModule)
  }, {
    path: 'client',
    loadChildren: () => import('src/app/client/client.module').then( module => module.ClientModule)
  }, {
    path: 'counsellor',
    loadChildren: () => import('src/app/counsellor/counsellor.module').then( module => module.CounsellorModule)
  }, {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then( module => module.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
