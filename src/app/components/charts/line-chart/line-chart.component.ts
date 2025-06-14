import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: [NgxEchartsModule],
})
export class LineChartComponent {
  @ViewChild('chart') chartElement!: ElementRef<HTMLElement>;
  private chart: echarts.ECharts | undefined;

  // Sample static data
  private sampleData = [
    ['2014-01-01', 100],
    ['2014-02-01', 120],
    ['2014-03-01', 90],
    ['2014-04-01', 150],
    ['2014-05-01', 200],
    ['2014-06-01', 180],
    ['2014-07-01', 250],
    ['2014-08-01', 300],
    ['2014-09-01', 280],
    ['2014-10-01', 220],
    ['2014-11-01', 190],
    ['2014-12-01', 160],
  ];

  protected chartOptions: echarts.EChartsOption = {
    title: {
      text: 'Sample Data',
      left: '1%',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '5%',
      right: '15%',
      bottom: '10%',
    },
    xAxis: {
      type: 'category',
      data: this.sampleData.map((item) => item[0]),
    },
    yAxis: {},
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        startValue: '2014-06-01',
      },
      {
        type: 'inside',
      },
    ],
    visualMap: {
      top: 50,
      right: 10,
      pieces: [
        {
          gt: 0,
          lte: 50,
          color: '#93CE07',
        },
        {
          gt: 50,
          lte: 100,
          color: '#FBDB0F',
        },
        {
          gt: 100,
          lte: 150,
          color: '#FC7D02',
        },
        {
          gt: 150,
          lte: 200,
          color: '#FD0100',
        },
        {
          gt: 200,
          lte: 300,
          color: '#AA069F',
        },
        {
          gt: 300,
          color: '#AC3B2A',
        },
      ],
      outOfRange: {
        color: '#999',
      },
    },
    series: {
      name: 'Sample Data',
      type: 'line',
      data: this.sampleData.map((item) => item[1]),
      markLine: {
        silent: true,
        lineStyle: {
          color: '#333',
        },
        data: [
          {
            yAxis: 50,
          },
          {
            yAxis: 100,
          },
          {
            yAxis: 150,
          },
          {
            yAxis: 200,
          },
          {
            yAxis: 300,
          },
        ],
      },
    },
  };

  onChartInit(eChart: echarts.ECharts) {
    this.chart = eChart;
  }
}
