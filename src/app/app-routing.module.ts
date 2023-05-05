import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TowersDetailsComponent } from './towers-details/towers-details.component';

const routes: Routes = [
  //{path: '', component: DashboardComponent},
  {path: "towers-details", component: TowersDetailsComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "chart", component: ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
