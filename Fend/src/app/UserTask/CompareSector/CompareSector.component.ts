import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/company.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { ChartType, Row } from 'angular-google-charts';

@Component({
  selector: 'app-CompareSector',
  templateUrl: './CompareSector.component.html',
  styleUrls: ['./CompareSector.component.css']
})
export class CompareSectorComponent implements OnInit {
  companylist:Company[];
  _no :number;

  title = "Sectors" ;
  mytype = ChartType.PieChart;
  columnNames = ['Sector Name', 'Turnover'];
  data = [['0',0]];
  width = 650;
  height = 500;

  constructor(private service:AdminServiceService) { 
    this.service.GetAll().subscribe(response => {
      this.companylist = response
      console.log(this.companylist)
    });
  }


  ngOnInit() {
  }

  onShow()
  {
    for(var item of this.companylist)
    {
      this._no = parseFloat(item.turnOver);
      this.data.push([item.sectorName, this._no]);
      
    }

    this.data = Object.assign([], this.data);
    console.log(this.data);
  }

}
