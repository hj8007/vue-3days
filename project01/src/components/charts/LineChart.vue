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
  name: 'LineChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    xaxisType: {
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
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: '',
          categories: []
        }
      }
    }
  },
  mounted() {
    this.chartOptions.xaxis.type = this.xaxisType
    this.chartOptions.xaxis.categories = this.categories
  },
  updated() {}
}
</script>
