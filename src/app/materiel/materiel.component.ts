import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export class Materiel {
  constructor(
    public matricul: string,
    public description: string,
    public prix: number,
    public kilometrage: number,
    public capacite: number,
    public carburant: string,
    public pneu: string,
    public transmission: string,
    public marque: string,
    public type: string,
    public etat: string,
    public disponibilite: string
  ) {}
}

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  materiels: Materiel[] = [];
  noDataMessage: string = '';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getMateriels();
  }

  getMateriels() {
    this.httpClient.get<any>('http://localhost:8082/api/materiel/').subscribe(
      response => {
        this.materiels = response.data;
      },
      error => {
        this.noDataMessage = error.error.message;
      }
    );
  }
}
