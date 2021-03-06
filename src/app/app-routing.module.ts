import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  //{ path: '', redirectTo: 'menu', pathMatch: 'full'},
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: 'menu/login', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: 'menu/register', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: 'menu/heatmap', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: 'menu/mainpage', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  { path: 'menu/upload', loadChildren: './pages/menu/menu.module#MenuPageModule'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
