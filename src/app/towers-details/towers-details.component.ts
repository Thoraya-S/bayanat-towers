import { Component, OnInit, ViewChild } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, DomLayoutType, GridOptions } from 'ag-grid-community';
import { TowersService } from '../towers.service';

@Component({
  selector: 'app-towers-details',
  templateUrl: './towers-details.component.html',
  styleUrls: ['./towers-details.component.scss']
})
export class TowersDetailsComponent implements OnInit {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  data: any = [];

  public towersData: any = null;
  public domLayout: DomLayoutType = 'autoHeight';
  
  columnDefs = [{ field: "tower_id", resizable: true, width:112}, 
  {field: "operator", resizable: true ,width:118 }, 
  { field: "address", resizable: true,width:294}, 
  { field: "height", resizable: true ,width:106},
  { field: "tower_type", resizable: true ,width:126},
  { field: "latitude", resizable: true,width:170},
  { field: "longitude",resizable: true,width:170 },
  { field: "technology" ,resizable: true,width:200}];

  public paginationPageSize = 10;

  constructor (private towersService : TowersService)  {
    
  }

  ngOnInit(): void {
    this.towersService.getAllTowersData().subscribe(data => this.towersData = data);
   // throw new Error('Method not implemented.');
  }



  
}
