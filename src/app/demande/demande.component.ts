import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

export class Demande {
  constructor(
    public reference: string,
    public statut: string,
    public dateDemande: Date,
  ) {}
}
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  listeDemandes: Demande[] = [];
  noDataMessage: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMateriels();
  }

  getMateriels() {
    this.httpClient.get<any>('http://localhost:8082/api/demande/').subscribe(
      response => {
        this.listeDemandes = response.data.map((demande: any) => ({
          reference: demande.reference,
          statut: demande.statut,
          dateDemande: new Date(demande.dateDemande)
        }));
      },
      error => {
        this.noDataMessage = error.error.message;
      }
    );
  }
}

