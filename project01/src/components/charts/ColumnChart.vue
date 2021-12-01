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
  name: 'ColumnChart',
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
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: ''
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    }
  },
  mounted() {
    this.chartOptions.xaxis.categories = this.categories
    this.chartOptions.yaxis.title.text = this.yaxisTitle
  },
  updated() {}
}
</script>
