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
  name: 'BarChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
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
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: []
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
