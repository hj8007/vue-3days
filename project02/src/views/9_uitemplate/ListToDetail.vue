<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchCustomerName"
        placeholder="고객명"
        style="margin-right: 10px; padding: 3px"
        @keyup.enter="doSearch"
      />
      <button
        @click="doSearch"
        style="margin-right: 5px"
        :disabled="loadingSearch"
      >
        조회
      </button>
      <button @click="goToCreate" style="margin-right: 5px">생성</button>
      <button @click="downloadExcel" :disabled="items.length == 0">
        엑셀 다운로드
      </button>
    </div>
    <div class="table-container">
      <data-grid
        :headers="headers"
        :items="items"
        checkedKey="id"
        :bHover="true"
        :pagecnt="15"
        @link="goToDetail"
      />
    </div>
  </div>
</template>
<script>
import DataGrid from '@/components/DataGrid.vue'
// import SimpleGrid from '@/components/SimpleGrid.vue'

export default {
  name: '',
  components: { 'data-grid': DataGrid },
  data() {
    return {
      loadingSearch: false,
      searchRegion: '',
      searchCustomerName: '',
      regionList: [],
      headers: [
        {
          title: '고객명',
          key: 'name',
          link: true,
          linkKey: 'id',
          eventName: 'link'
        },
        {
          title: '회사명',
          key: 'company'
        },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      items: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.$route.query.searchCustomerName !== undefined) {
      this.searchCustomerName = this.$route.query.searchCustomerName
      this.doSearch()
    }
  },
  unmounted() {},
  methods: {
    goToDetail(customerId) {
      this.$router.push({
        path: '/template/detail',
        query: { id: customerId, searchCustomerName: this.searchCustomerName }
      })
    },
    async doSearch() {
      this.loadingSearch = true
      this.items = await this.$get(
        `/users?name_like=${this.searchCustomerName}`
      )
      this.loadingSearch = false
    },
    goToCreate() {
      this.$router.push({ path: '/template/create' })
    },
    downloadExcel() {
      this.$ExcelFromTable(this.headers, this.items, 'List' + Date.now())
    }
  }
}
</script>
<style scoped>
.search-container {
  padding: 10px;
}

.search-container:after {
  clear: both;
}

.search-container > div {
  float: left;
  margin-right: 10px;
}

.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}

.table-container {
  margin-top: 10px;
  padding: 10px;
}
</style>
