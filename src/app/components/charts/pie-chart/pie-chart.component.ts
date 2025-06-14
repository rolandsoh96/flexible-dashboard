import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { BaseWidget } from 'gridstack/dist/angular';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent extends BaseWidget implements OnInit {
  @ViewChild('chart') chartElement!: ElementRef<HTMLElement>;
  private chart: echarts.ECharts | undefined;

  // Sample tree data
  private treeData = {
    name: 'Company Performance',
    children: [
      {
        name: 'Revenue',
        children: [
          {
            name: 'Product Sales',
          },
          {
            name: 'Services',
          },
          {
            name: 'Digital',
          },
        ],
      },
      {
        name: 'Expenses',
        children: [
          {
            name: 'Operations',
          },
          {
            name: 'Personnel',
          },
          {
            name: 'Marketing',
          },
        ],
      },
      {
        name: 'Investments',
        children: [
          {
            name: 'R&D',
          },
          {
            name: 'Infrastructure',
          },
          {
            name: 'Acquisitions',
          },
        ],
      },
      {
        name: 'Performance Metrics',
        children: [
          {
            name: 'Customer',
          },
          {
            name: 'Financial',
          },
          {
            name: 'Operational',
          },
        ],
      },
    ],
  };

  protected chartOptions: echarts.EChartsOption = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: (params: any) => {
        if (params.value) {
          if (params.value < 100) {
            return `${params.name}: ${params.value}%`;
          }
          if (params.value >= 1000000) {
            return `${params.value.toLocaleString()}`;
          }
          return `${params.name}: $${params.value.toLocaleString()}`;
        }
        return params.name;
      },
    },
    series: [
      {
        type: 'tree',
        data: [this.treeData],
        top: '5%',
        left: '5%',
        bottom: '5%',
        right: '5%',
        symbolSize: 9,
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 10,
          formatter: (params: any) => {
            if (params.value) {
              if (params.value < 100) {
                return `${params.name}\n${params.value}%`;
              }
              if (params.value >= 1000000) {
                return `${params.name}\n$${(params.value / 1000000).toFixed(1)}M`;
              }
              return `${params.name}\n$${params.value.toLocaleString()}`;
            }
            return params.name;
          },
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
          },
        },
        emphasis: {
          focus: 'descendant',
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
        initialTreeDepth: -1,
        orient: 'TB',
        layout: 'orthogonal',
        edgeShape: 'polyline',
        edgeForkPosition: '63%',
      },
    ],
  };

  ngOnInit(): void {
    // Initialize collapsed state for even-indexed nodes
    this.treeData.children.forEach((datum: any, index: number) => {
      index % 2 === 0 && (datum.collapsed = true);
    });
  }

  onChartInit(eChart: echarts.ECharts) {
    this.chart = eChart;
    // Add resize observer to handle container size changes
    const resizeObserver = new ResizeObserver(() => {
      this.chart?.resize();
    });
    if (this.chartElement?.nativeElement) {
      resizeObserver.observe(this.chartElement.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
