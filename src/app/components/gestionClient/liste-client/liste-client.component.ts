import { Component, OnInit } from '@angular/core';
import { AgriService } from 'src/app/services/agri.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  clients;
  clientFilter
  constructor(private agriSrv:AgriService) { }

  ngOnInit(): void {
    this.getAllCients();
  }
  getAllCients() {
    this.agriSrv.getAllCients().subscribe((data: any) => {
      this.clientFilter = this.clients = data;
      console.log("clients", this.clients);
    });
  }
  filterClient(value) {
    if (value) {
      this.clientFilter = this.clients.filter((x) => x.nom == value);
    } else this.clientFilter = this.clients;
    console.log("clientFilter", this.clientFilter);
    console.log("value", value);
  }

}
