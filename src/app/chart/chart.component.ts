import { Component, OnInit } from '@angular/core';
//import { AgChartOptions } from 'ag-charts-community';
import { TowersService } from '../towers.service';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  //public options: AgChartOptions;
  towers: [] = [];
  twoG : number = 0;
  threeG : number = 0;
  forthG: number = 0;
  fiveG: number = 0;
  numCountData:any =[];
  typeOfTech: any = [];
   newArray: any = [];
  ffff: any =  [
    {technology: '2G',number: 50,},
    {technology: '3G',number: 70,},
    {technology: '4G',number: 60,},
    {technology: '5G',number: 80,},
  ]

  chartdata: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  constructor(private towersService : TowersService){
    //this.getChartData();
    // this.options = {data:this.ffff,
    //       series: [
    //         {
    //           type: 'column',
    //           xKey: 'technology',
    //           yKey: 'number',
    //           yName: 'Technology',
    //         },
    //       ],
    //       tooltip: {
    //         //class: 'my-tooltip',
    //       },
    //     };
    //this.options = this.setChartData();
  }
  ngOnInit(): void {
    this.getChartData();
    
    
   // throw new Error('Method not implemented.');
  }

  renderChart(labeldata:any,maindata:any) {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data : {
        labels : labeldata,
        datasets: [{
          label: 'Number Of Towers per Technology', 
          data: maindata,
          backgroundColor:[
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
           // max: 70
          }
        }
      }
    });
  }

  getChartData () {
    this.towersService.getAllTowersData().subscribe(res => {
      this.towers = res;
      console.log("this.towers::::",this.towers)
      let numData=[];
      let typeTech:any = [];
      this.towers.forEach(ele => {
      let type = ele['technology']

        switch(type){
          case "2G":
            this.twoG += 1
            break;
          case "3G":
            this.threeG += 1
            break;
          case "4G":
            this.forthG += 1
            break;
          case "5G":
            this.fiveG += 1
            break;
        }
        typeTech.push(type)
      })
      this.typeOfTech = typeTech;
      this.typeOfTech.cities = [...new Set(this.typeOfTech)];
      this.newArray= this.typeOfTech.cities.sort();
      console.log("KKKKKKKKKKK", this.newArray)
      this.labeldata = this.newArray;
      numData.push(this.twoG, this.threeG, this.forthG,this.fiveG);
      this.chartdata = numData;
      console.log(numData)
      this.renderChart(this.labeldata,numData);
    })
  }

}
