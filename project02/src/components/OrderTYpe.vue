<template>
  <select v-model="selectedOrderType" @change="doChange">
    <option :value="opt.v" :key="opt.v" v-for="opt in list">{{ opt.t }}</option>
  </select>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      list: [],
      selectedOrderType: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getOrderTypeList() {
      this.list = [
        { v: '01', t: '정상오더' },
        { v: '02', t: '긴급오더' }
      ]
    },
    doChange() {
      this.$emit('change-item', this.selectedOrderType)
    }
  }
}
</script>
