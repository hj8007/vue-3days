<template>
  <div></div>
</template>
<script>
export default {
  name: '',
  components: {},
  inject: ['itemLength'],
  data() {
    return {
      sampleData: ''
    }
  },
  watch: {
    itemLength(newValue) {
      console.log('watch test', newValue)
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.itemLength)
  },
  unmounted() {},
  methods: {}
}
</script>
