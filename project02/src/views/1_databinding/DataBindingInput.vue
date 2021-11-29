<template>
  <div>
    <input type="text" v-model="valueModel" />
    <h1>{{ valueModel }}</h1>
    <input type="number" v-model.number="numberModel" />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      valueModel: 'South Korea',
      numberModel: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
