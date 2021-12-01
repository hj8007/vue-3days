<template>
  <apexchart
    :width="width"
    :height="height"
    type="bar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
/* eslint-disable */
export default {
  name: 'StackColumnChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    yaxisTitle: {
      type: String,
      default: ''
    },
    is100: {
      type: Boolean,
      default: false
    },
    categories: {
      type: Array,
      default: function() {
        return []
      }
    },
    series: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          type: '',
          categories: []
        },
        // legend: {
        //   position: 'right',
        //   offsetY: 40
        // },
        fill: {
          opacity: 1
        }
      }
    }
  },
  mounted() {
    this.chartOptions.xaxis.type = this.xaxisTye
    this.chartOptions.xaxis.categories = this.categories
    if (this.is100) {
      this.chartOptions.chart.stackType = '100%'
    }
  },
  updated() {}
}
</script>
