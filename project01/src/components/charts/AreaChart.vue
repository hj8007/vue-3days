<template>
  <apexchart
    :width="width"
    :height="height"
    type="area"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script>
/* eslint-disable */
export default {
  name: 'AreaChart',
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
    legendLocation: {
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: []
        },
        tooltip: {
          fixed: {
            enabled: false,
            position: 'topRight'
          }
        }
      }
    }
  },
  mounted() {
    this.chartOptions.xaxis.categories = this.categories
  },
  updated() {}
}
</script>
