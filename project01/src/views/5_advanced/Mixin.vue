<template>
  <div></div>
</template>
<script>
import Formatter from '@/mixins/formatter.js'
export default {
  mixins: [Formatter],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.dateFormat(new Date(), 'YYYY-MM-DD'))
  },
  unmounted() {},
  methods: {}
}
</script>
