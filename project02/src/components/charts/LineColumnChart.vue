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
  name: 'LineColumnChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    title: {
      type: String,
      default: ''
    },
    xaxisType: {
      type: String,
      default: ''
    },
    columnTitle: {
      type: String,
      default: ''
    },
    lineTitle: {
      type: String,
      default: ''
    },
    labels: {
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
          type: 'line'
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: ''
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [],
        xaxis: {
          type: ''
        },
        yaxis: []
      }
    }
  },
  mounted() {
    this.chartOptions.title.text = this.title
    this.chartOptions.xaxis.type = this.xaxisType
    this.chartOptions.labels = this.labels
    if (this.series.length > 0) {
      this.chartOptions.yaxis = [
        {
          title: {
            text: this.series[0].name
          }
        },
        {
          opposite: true,
          title: {
            text: this.series[1].name
          }
        }
      ]
    }
  },
  updated() {}
}
</script>
