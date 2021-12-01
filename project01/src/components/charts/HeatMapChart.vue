<template>
  <apexchart
    :width="width"
    :height="height"
    type="heatmap"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HeatMapChart',
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
    series: {
      type: Array,
      default: function() {
        return []
      }
    },
    colors: {
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
          type: 'heatmap'
        },
        dataLabels: {
          enabled: false
        },
        colors: [],
        title: {
          text: ''
        }
      }
    }
  },
  mounted() {
    this.chartOptions.title.text = this.title
    this.chartOptions.colors = this.colors
  },
  updated() {}
}
</script>
