import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

export class Demande {
  constructor(
    public reference: string,
    public statut: string,
    public dateDemande: Date,
    public materielDemander: any[]
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
  numeroDemande: number = 0;
  events: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMateriels();
  }

  getMateriels() {
    this.httpClient.get<any>('http://localhost:8082/api/demande/').subscribe(
      response => {
        this.listeDemandes = response.data.map((demandeData: any) => {
          this.numeroDemande++;
          return {
            reference: `D-${this.formatNumeroDemande(this.numeroDemande)}-${new Date().getFullYear()}`,
            statut: demandeData.statut,
            dateDemande: new Date(demandeData.dateDemande),
            materielDemander: demandeData.materielDemander
          };
        });
        this.updateCalendarEvents();
      },
      error => {
        this.noDataMessage = error.error.message;
      }
    );
  }

  updateCalendarEvents() {
    this.events = [];
    this.listeDemandes.forEach((demande: Demande) => {
      demande.materielDemander.forEach((materielDemande: any) => {
        const event = {
          title: `${materielDemande.materiel.matricul} - ${materielDemande.materiel.type} - ${materielDemande.materiel.marque}`,
          start: new Date(materielDemande.debut),
          end: new Date(materielDemande.fin),
          color: this.getColorByStatut(materielDemande.materiel.disponibilite)
        };
        this.events.push(event);
      });
    });

    this.calendarOptions.events = this.events;
  }

  formatNumeroDemande(numero: number): string {
    return numero.toString().padStart(4, '0');
  }

  getColorByStatut(statut: string): string {
        return '#000000';
  }
}
