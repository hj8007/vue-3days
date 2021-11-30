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
  setup() {},
  created() {},
  mounted() {
    console.log(this.itemLength)
  },
  unmounted() {},
  methods: {}
}
</script>
