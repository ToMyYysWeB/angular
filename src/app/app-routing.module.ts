import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './_components/account/account.component';
import { AboutComponent, DashboardComponent, ProductionComponent, RelationComponent } from './_components';
import { ProductionDetailComponent } from './_components/production-detail/production-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'relation', component: RelationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'production/:id', component: ProductionDetailComponent },
  { path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
