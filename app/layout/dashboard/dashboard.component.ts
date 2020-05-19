import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Assets',
              data: [10000, 43432, 34567, 9000, 7000, 25467, 86789, 67451, 18433, 8521, 2945, 962],
              // backgroundColor: [
              //     'rgba(255, 99, 132, 1)',
              //     'rgba(54, 162, 235, 1)',
              //     'rgba(255, 206, 86, 1)'
              // ],
              backgroundColor: ['#4B0B5D'],
              borderDashOffset: 2,
              borderWidth: 2
          }]
      },
      options: {
        responsive: true,
        // display: true
      }
    });
  }

}
