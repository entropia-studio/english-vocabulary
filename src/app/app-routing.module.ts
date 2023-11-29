import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'descriptions',
    loadChildren: () =>
      import('./pages/descriptions/descriptions.module').then(
        (m) => m.DescriptionsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'terms',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
