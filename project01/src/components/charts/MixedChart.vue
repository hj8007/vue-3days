<template>
  <apexchart
    :width="width"
    :height="height"
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MixedChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    labels: {
      type: Array,
      default: function() {
        return []
      }
    },
    xaxisType: {
      type: String,
      default: ''
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
          stacked: false
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: [],
        markers: {
          size: 0
        },
        xaxis: {
          type: ''
        },
        yaxis: {
          title: {
            text: 'Points'
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function(y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' points'
              }
              return y
            }
          }
        }
      }
    }
  },
  mounted() {
    this.chartOptions.xaxis.type = this.xaxisType
    this.chartOptions.labels = this.labels
  },
  updated() {}
}
</script>
