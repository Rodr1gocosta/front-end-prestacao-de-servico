import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuardService } from './seguranca/auth/auth.guard.service';
import { LoginComponent } from './seguranca/login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},


  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'tecnicos',
    loadChildren: () => import('./components/tecnicos/tecnicos.module').then(m => m.TecnicosModule), 
    canActivate: [AuthGuardService] 
  },
  
  {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuardService] },
  {path: 'pages', component: PagesComponent, canActivate: [AuthGuardService]},
  {path: 'media', component: MediaComponent, canActivate: [AuthGuardService]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService] 
})
export class AppRoutingModule { }
