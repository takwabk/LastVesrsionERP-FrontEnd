import { Component, OnInit } from '@angular/core';
import { AgriService } from '../services/agri.service';

@Component({
  selector: 'app-capex',
  templateUrl: './capex.component.html',
  styleUrls: ['./capex.component.css']
})
export class CapexComponent implements OnInit {
  public doughnutChartLabels = ["Etudes", "Gros oeuvres", "Raccordement"];
  public doughnutChartData = [120, 150, 90];
  public doughnutChartType = "doughnut";
  conceptions;
  Constructions;
  constructor(private agriSrv:AgriService) { }

  ngOnInit() {
    this.getDataConstruction();
    this.getData();
  }


getDataConstruction() {
    this.agriSrv.getDataConstruction().subscribe((data) => {
      this.conceptions = data;
      // this.id = this.conceptions[0]._id;
      console.log("data-conceptions in Capex", data);
    });
  }
  getData(){
    this.agriSrv.getData().subscribe((data) => {
      this.Constructions = data;
      // this.id = this.conceptions[0]._id;
      console.log("ya lalii ya la ", this.Constructions);

    });
  }
}
