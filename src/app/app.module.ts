import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TowersDetailsComponent } from './towers-details/towers-details.component';
import { ChartComponent } from './chart/chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TowersDetailsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgGridModule,
    AgChartsAngularModule
   // AgGridModule.withComponents([GridCellEditorComponent, ImageFormatterComponent, ImageFormatterComponentR])
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
