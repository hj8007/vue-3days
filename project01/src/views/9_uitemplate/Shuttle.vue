<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="btn-area">
          <button @click="addItem" :disabled="addItems.length == 0">
            추가
          </button>
        </div>
        <div class="table-container">
          <data-grid
            :headers="headers"
            :items="items"
            selectType="checkbox"
            checkedKey="id"
            @change-item="checkedItem"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="btn-area">
          <button @click="removeItem" :disabled="removeItems.length == 0">
            삭제
          </button>
        </div>
        <div class="table-container">
          <data-grid
            :headers="headers"
            :items="items2"
            selectType="checkbox"
            checkedKey="id"
            @change-item="checkedItem2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/fragments/DataGrid.vue'
export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      headers: [
        { title: '고객명', key: 'name' },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '이메일', key: 'email' }
      ],
      items: [],
      items2: [],
      addItems: [],
      removeItems: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.doSearch()
  },
  unmounted() {},
  methods: {
    checkedItem(data) {
      this.addItems = data
    },
    checkedItem2(data) {
      this.removeItems = data
    },
    addItem() {
      const items2 = JSON.parse(JSON.stringify(this.items2))

      this.addItems.forEach(addItem => {
        const item = items2.filter(item => item.id === addItem)
        if (item.length === 0) {
          items2.push(this.items.filter(item => item.id === addItem)[0])
        }
      })

      this.items2 = items2

      this.addItems = []
    },
    removeItem() {
      const items2 = JSON.parse(JSON.stringify(this.items2))
      this.removeItems.forEach(removeItem => {
        items2.forEach((item, idx) => {
          if (item.id === removeItem) {
            items2.splice(idx, 1)
          }
        })
      })

      this.items2 = items2
    },
    async doSearch() {
      this.items = await this.$api('/users')
    }
  }
}
</script>
<style scoped>
.btn-area {
  text-align: right;
  margin-bottom: 5px;
}

.btn-area button {
  padding: 5px;
}
</style>
