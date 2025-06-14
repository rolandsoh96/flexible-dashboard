import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { BaseWidget } from 'gridstack/dist/angular';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  imports: [NgxEchartsModule],
})
export class BarChartComponent extends BaseWidget implements OnInit {
  @ViewChild('chart') chartElement!: ElementRef<HTMLElement>;
  private chart: echarts.ECharts | undefined;

  // Sample data
  private dataAxis = [
    '点',
    '击',
    '柱',
    '子',
    '或',
    '者',
    '两',
    '指',
    '在',
    '触',
    '屏',
    '上',
    '滑',
    '动',
    '能',
    '够',
    '自',
    '动',
    '缩',
    '放',
  ];
  private data = [
    220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133,
    334, 198, 123, 125, 220,
  ];
  private yMax = 500;
  private dataShadow: number[] = [];

  protected chartOptions: echarts.EChartsOption = {
    title: {
      text: '特性示例：渐变色 阴影 点击缩放',
      subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
    },
    xAxis: {
      data: this.dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#999',
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    grid: {
      left: '5%',
      right: '2%',
      bottom: '5%',
    },
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
        data: this.data,
      },
    ],
  };

  ngOnInit(): void {
    // Initialize shadow data
    this.dataShadow = Array(this.data.length).fill(this.yMax);
  }

  onChartInit(eChart: echarts.ECharts) {
    this.chart = eChart;

    // Enable data zoom when user click bar
    const zoomSize = 6;
    this.chart.on('click', (params: any) => {
      this.chart?.dispatchAction({
        type: 'dataZoom',
        startValue: this.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          this.dataAxis[
            Math.min(params.dataIndex + zoomSize / 2, this.data.length - 1)
          ],
      });
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
