<template>
  <apexchart
    :width="width"
    type="pie"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PieChart',
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
        chart: {
          type: 'pie'
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.chartOptions.labels = this.labels
  },
  updated() {}
}
</script>
