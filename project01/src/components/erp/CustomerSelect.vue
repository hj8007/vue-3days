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
    },
    customerType: {
      type: String,
      default: 'soldto'
    }
  },
  data() {
    return {
      customerCode: '',
      list: []
    }
  },
  setup() {},
  created() {
    this.customerCode = this.defaultValue
  },
  mounted() {
    this.getList()
  },
  unmounted() {},
  methods: {
    doChange() {
      this.$emit(this.eventName, this.customerCode)
    },
    getList() {
      const soldtoData = [
        { code: '001', text: 'Sold to party 1' },
        { code: '002', text: 'Sold to party 2' },
        { code: '003', text: 'Sold to party 3' }
      ]

      const shiptoData = [
        { code: '001', text: 'Ship to party 1' },
        { code: '002', text: 'Ship to party 2' },
        { code: '003', text: 'Ship to party 3' }
      ]

      const billtoData = [
        { code: '001', text: 'Bill to party 1' },
        { code: '002', text: 'Bill to party 2' },
        { code: '003', text: 'Bill to party 3' }
      ]

      const payerData = [
        { code: '001', text: 'Payer 1' },
        { code: '002', text: 'Payer 2' },
        { code: '003', text: 'Payer 3' }
      ]

      var list = []
      if (this.customerType === 'soldto') {
        list = soldtoData
      } else if (this.customerType === 'shipto') {
        list = shiptoData
      } else if (this.customerType === 'billto') {
        list = billtoData
      } else if (this.customerType === 'payer') {
        list = payerData
      }

      if (this.firstOption !== null) {
        list.unshift(this.firstOption)
      }
    }
  }
}
</script>
