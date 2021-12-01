<template>
  <apexchart
    :width="width"
    type="donut"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
/* eslint-disable */
export default {
  name: 'DonutChart',
  props: {
    width: {
      type: String,
      default: '100%'
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
        labels: []
      }
    }
  },
  mounted() {
    this.chartOptions.labels = this.labels
  },
  updated() {}
}
</script>
