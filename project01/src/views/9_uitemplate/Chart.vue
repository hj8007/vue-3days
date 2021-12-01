<template>
  <div>
    <area-chart
      :categories="area.categories"
      :series="area.series"
      height="400px"
    />
    <bar-chart
      :categories="bar.categories"
      :series="bar.series"
      height="400px"
    />
    <column-chart
      :categories="column.categories"
      :series="column.series"
      yaxisTitle="$(thousands)"
      height="400px"
    />
    <stack-column-chart
      :categories="stackColumn.categories"
      :series="stackColumn.series"
      :xaxisType="stackColumn.xaxisType"
      :is100="true"
      height="400px"
    />
    <donut-chart :labels="donut.labels" :series="donut.series" width="400px" />
    <pie-chart :labels="pie.labels" :series="pie.series" width="400px" />
    <line-chart
      :xaxisType="line.xaxisType"
      :categories="line.categories"
      :series="line.series"
      height="400px"
    />
    <line-column-chart
      :xaxisType="lineColumn.xaxisType"
      :labels="lineColumn.labels"
      :series="lineColumn.series"
      height="400px"
    />
    <mixed-chart
      :xaxisType="mixed.xaxisType"
      :labels="mixed.labels"
      :series="mixed.series"
      height="400px"
    />
    <heatmap-chart
      title="HeatMap Chart (Single color)"
      :colors="heatmap.colors"
      :series="heatmap.series"
      height="400px"
    />
  </div>
</template>
<script>
import AreaChart from '@/components/charts/AreaChart'
import BarChart from '@/components/charts/BarChart'
import ColumnChart from '@/components/charts/ColumnChart'
import StackColumnChart from '@/components/charts/StackColumnChart'
import DonutChart from '@/components/charts/DonutChart'
import PieChart from '@/components/charts/PieChart'
import LineChart from '@/components/charts/LineChart'
import LineColumnChart from '@/components/charts/LineColumnChart'
import MixedChart from '@/components/charts/MixedChart'
import HeatMapChart from '@/components/charts/HeatMapChart'
export default {
  components: {
    'area-chart': AreaChart,
    'bar-chart': BarChart,
    'column-chart': ColumnChart,
    'stack-column-chart': StackColumnChart,
    'donut-chart': DonutChart,
    'pie-chart': PieChart,
    'line-chart': LineChart,
    'line-column-chart': LineColumnChart,
    'mixed-chart': MixedChart,
    'heatmap-chart': HeatMapChart
  },
  data() {
    return {
      area: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ]
      },
      bar: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        series: [
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      },
      column: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct'
        ],
        series: [
          {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          },
          {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          },
          {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }
        ]
      },
      stackColumn: {
        xaxisType: 'datetime',
        categories: [
          '01/01/2011 GMT',
          '01/02/2011 GMT',
          '01/03/2011 GMT',
          '01/04/2011 GMT',
          '01/05/2011 GMT',
          '01/06/2011 GMT'
        ],
        series: [
          {
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
          },
          {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
          },
          {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
          },
          {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
          }
        ]
      },
      donut: {
        labels: ['Blue', 'Green', 'Yellow', 'Red'],
        series: [11, 32, 45, 32]
      },
      pie: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        series: [44, 55, 13, 43, 22]
      },
      line: {
        xaxisType: 'datetime',
        categories: [
          '01/01/2003',
          '02/01/2003',
          '03/01/2003',
          '04/01/2003',
          '05/01/2003',
          '06/01/2003',
          '07/01/2003',
          '08/01/2003'
        ],
        series: [
          {
            name: 'Series A',
            data: this.generateDayWiseTimeSeries(
              new Date('11 Feb 2017').getTime(),
              20,
              {
                min: 10,
                max: 20
              }
            )
          },
          {
            name: 'Series B',
            data: this.generateDayWiseTimeSeries(
              new Date('11 Feb 2017').getTime(),
              20,
              {
                min: 10,
                max: 20
              }
            )
          }
        ]
      },
      lineColumn: {
        labels: [
          '01 Jan 2001',
          '02 Jan 2001',
          '03 Jan 2001',
          '04 Jan 2001',
          '05 Jan 2001',
          '06 Jan 2001',
          '07 Jan 2001',
          '08 Jan 2001',
          '09 Jan 2001',
          '10 Jan 2001',
          '11 Jan 2001',
          '12 Jan 2001'
        ],
        xaxisType: 'datetime',
        series: [
          {
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
          },
          {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          }
        ]
      },
      mixed: {
        labels: [
          '01/01/2003',
          '02/01/2003',
          '03/01/2003',
          '04/01/2003',
          '05/01/2003',
          '06/01/2003',
          '07/01/2003',
          '08/01/2003',
          '09/01/2003',
          '10/01/2003',
          '11/01/2003'
        ],
        xaxisType: 'datetime',
        series: [
          {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          },
          {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          },
          {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }
        ]
      },
      heatmap: {
        colors: ['#008FFB'],
        series: [
          {
            name: 'Metric1',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric2',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric3',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric4',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric5',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric6',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric7',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric8',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric9',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          }
        ]
      }
    }
  },
  methods: {
    generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = baseval
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        series.push([x, y])
        baseval += 86400000 * 7
        i++
      }
      return series
    },
    generateData(count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = 'w' + (i + 1).toString()
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

        series.push({
          x: x,
          y: y
        })
        i++
      }
      return series
    }
  }
}
</script>
