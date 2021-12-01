<template>
  <select v-model="orderType" @change="doChange">
    <option :value="item.code" :key="i" v-for="(item, i) in list">{{
      item.text
    }}</option>
  </select>
</template>
<script>
export default {
  name: 'order-type',
  props: {
    eventName: {
      type: String,
      default: 'changeOrderType'
    },
    defaultValue: {
      type: String,
      default: ''
    },
    firstOption: {
      type: Object,
      default: function() {
        return { code: '', text: '' }
      }
    }
  },
  data() {
    return {
      orderType: '',
      list: []
    }
  },
  setup() {},
  created() {
    this.orderType = this.defaultValue
  },
  mounted() {
    this.getList()
  },
  unmounted() {},
  methods: {
    doChange() {
      this.$emit(this.eventName, this.orderType)
    },
    getList() {
      var serverData = [
        { code: '001', text: 'Standard Order' },
        { code: '002', text: 'Emergency Order' },
        { code: '003', text: 'Extra Order' }
      ]

      var list = serverData

      if (this.firstOption !== null) {
        list.unshift(this.firstOption)
      }
    }
  }
}
</script>
