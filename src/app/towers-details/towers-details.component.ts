import { Component, OnInit, ViewChild } from '@angular/core';
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
  
  columnDefs = [{headerName:"Tower Id", field: "tower_id", resizable: true, width:112}, 
  {headerName:"Operator",field: "operator", resizable: true ,width:118 }, 
  {headerName:"Address", field: "address", resizable: true,width:294}, 
  {headerName:"Height", field: "height", resizable: true ,width:106},
  {headerName:"Tower Type",field: "tower_type", resizable: true ,width:126},
  {headerName:"Latitude", field: "latitude", resizable: true,width:170},
  {headerName:"Longitude", field: "longitude",resizable: true,width:170 },
  {headerName:"Technology", field: "technology" ,resizable: true,width:200}];

  public paginationPageSize = 10;

  constructor (private towersService : TowersService)  {
    
  }

  ngOnInit(): void {
    this.towersService.getAllTowersData().subscribe(data => this.towersData = data);
  }

}
