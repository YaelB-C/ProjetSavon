import { isPlatformBrowser } from '@angular/common';
import { Component, Input, AfterViewInit, ViewChild, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';



@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements AfterViewInit {
  @ViewChild('radarCanvas') radarCanvas!: { nativeElement: HTMLCanvasElement };
  @Input() resultats: any[] = []; // Les données passées par RecetteIndex

  // Labels du graphique (excluant l'INS)
  public radarChartLabels: string[] = [
    'Douceur', 'Lavant', 'Vol mousse',
    'Tenue mousse', 'Dureté', 'Solubilité', 'Séchage'
  ];

  // Options du graphique
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    plugins:{
      legend:{
        display:false
      }
    },
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 16
      }
    }
  };

  // Type du graphique
  public radarChartType: ChartType = 'radar';
  public isBrowser:Boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    Chart.register(...registerables);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.radarCanvas && this.isBrowser) {
      this.createRadarChart();
    }
  }

  private createRadarChart(): void {
    const dataValues = this.resultats
      .filter(res => res.caracteristique.nom !== 'Indice INS'&& res.caracteristique.nom !=="Iode") // Exclure l'INS
      .map(res => res.score); // Extraire les scores
console.log(dataValues)
    new Chart(this.radarCanvas.nativeElement, {
      type: 'radar',
      data: {
        labels: this.radarChartLabels,
        datasets: [
          {
            label: 'Résultats',
            data: dataValues,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          }
        ]
      },
      options: this.radarChartOptions
    });
  }
}