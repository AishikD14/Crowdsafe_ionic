import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: '', redirectTo: 'menu', pathMatch: 'full'},
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: '/menu', redirectTo: 'menu', pathMatch: 'full'},
  { path: '/menu/login', redirectTo: 'menu', pathMatch: 'full'},
  { path: '/menu/register', redirectTo: 'menu', pathMatch: 'full'},
  { path: '/menu/heatmap', redirectTo: 'menu', pathMatch: 'full'},
  { path: '/menu/mainpage', redirectTo: 'menu', pathMatch: 'full'},
  { path: '/menu/upload', redirectTo: 'menu', pathMatch: 'full'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
