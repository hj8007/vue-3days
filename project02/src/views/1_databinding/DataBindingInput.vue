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
      numberModel: 0,
      list: [],
      date: null,
      date2: null,
      month: null,
      time: null
    }
  },
  setup() {},
  //   beforeCreate() {
  //     console.log('beforeCreate')
  //   },
  created() {
    console.log('created')
    this.getRegionData()
  },
  //   beforeMount() {
  //     console.log('beforeMount')
  //   },
  mounted() {
    console.log('mounted')
  },
  //   beforeUpdate() {},
  updated() {},
  unmounted() {
    //   this.list = null
  },
  methods: {
    getRegionData() {},
    getSomeData() {}
  }
}
</script>
