import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'task1',
    loadChildren: () => import('./pages/task1/task1.module').then( m => m.Task1PageModule)
  },
  {
    path: 'task2',
    loadChildren: () => import('./pages/task2/task2.module').then( m => m.Task2PageModule)
  },
  {
    path: 'task3',
    loadChildren: () => import('./pages/task3/task3.module').then( m => m.Task3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
