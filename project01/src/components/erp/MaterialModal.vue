<template>
  <div class="modal" :class="{ hidden: isHide }">
    <data-grid
      selectType="radio"
      :headers="headers"
      :items="items"
      checkedKey="code"
      @change-item="changeItem"
    />
    <div>
      <button @click="hide">Cancel</button>
      <button class="ok" @click="selectMaterial">Ok</button>
    </div>
  </div>
</template>
<script>
import DataGrid from '../fragments/DataGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid },
  props: {
    eventName: {
      type: String,
      default: 'select-material'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(currentValue, oldValue) {
      console.log('currentValue', currentValue)
      console.log('oldValue', oldValue)
      this.isHide = !this.show
    }
  },
  data() {
    return {
      headers: [
        {
          title: '제품코드',
          key: 'code'
        },
        { title: '제품명', key: 'desc' },
        { title: '제품가격', key: 'price' }
      ],
      items: [],
      checked: '',
      isHide: true
    }
  },
  setup() {},
  created() {
    this.getList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    getList() {
      this.items = [
        { code: 'P0001', desc: '제품명 A', price: 3500000 },
        { code: 'P0002', desc: '제품명 B', price: 2700000 },
        { code: 'P0003', desc: '제품명 C', price: 5000000 },
        { code: 'P0004', desc: '제품명 D', price: 4000000 },
        { code: 'P0005', desc: '제품명 E', price: 2900000 },
        { code: 'P0006', desc: '제품명 F', price: 15000000 },
        { code: 'P0007', desc: '제품명 G', price: 3300000 },
        { code: 'P0008', desc: '제품명 H', price: 8900000 },
        { code: 'P0009', desc: '제품명 I', price: 21000000 },
        { code: 'P0010', desc: '제품명 J', price: 5000000 },
        { code: 'P0011', desc: '제품명 K', price: 3000000 },
        { code: 'P0012', desc: '제품명 L', price: 2000000 },
        { code: 'P0013', desc: '제품명 M', price: 4000000 },
        { code: 'P0014', desc: '제품명 N', price: 5000000 }
      ]
    },
    changeItem(code) {
      console.log(code)
      this.checked = code
    },
    hide() {
      this.isHide = true
    },
    selectMaterial() {
      this.isHide = true
      this.$emit(this.eventName, this.checked)
    }
  }
}
</script>
<style scoped>
.modal {
  margin: auto;
  z-index: 9999;
  position: relative;
  width: 1000px;
  border: 1px solid #ddd;
  padding: 10px;
}

.hidden {
  display: none;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
}

.ok {
  background-color: cyan;
}
</style>
