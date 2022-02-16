import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'data',
    loadChildren: () =>
      import('./modules/data/data.module').then((m) => m.DataModule)
  },
  {
    path: 'analysis',
    loadChildren: () =>
      import('./modules/analysis/analysis.module').then((m) => m.AnalysisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
