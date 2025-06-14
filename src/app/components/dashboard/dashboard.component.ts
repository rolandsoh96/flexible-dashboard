import { Component, OnInit, ViewChild } from '@angular/core';
import { GridstackComponent, NgGridStackOptions } from 'gridstack/dist/angular';
import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    GridstackComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
})
export class DashboardComponent implements OnInit {
  @ViewChild(GridstackComponent) gridstackComponent!: GridstackComponent;

  protected gridOptions: NgGridStackOptions = {
    cellHeight: 50,
    margin: 5,
    acceptWidgets: true,
    column: 24,
    draggable: {
      handle: '.draggable',
    },
    float: true,
    minRow: 1,
    children: [
      {
        x: 0,
        y: 0,
        w: 12,
        h: 8,
        selector: 'app-line-chart',
      },
      { x: 12, y: 0, w: 8, h: 8, selector: 'app-bar-chart' },
      { x: 0, y: 8, w: 12, h: 8, selector: 'app-pie-chart' },
    ],
  };

  ngOnInit(): void {
    GridstackComponent.addComponentToSelectorType([
      LineChartComponent,
      BarChartComponent,
      PieChartComponent,
    ]);
  }
}
