import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capex',
  templateUrl: './capex.component.html',
  styleUrls: ['./capex.component.css']
})
export class CapexComponent implements OnInit {
  public doughnutChartLabels = ["Etudes", "Gros oeuvres", "Raccordement"];
  public doughnutChartData = [120, 150, 90];
  public doughnutChartType = "doughnut";
  constructor() { }

  ngOnInit() {
  }


}
