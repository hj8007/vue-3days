<template>
  <div>
    <table class="data-grid">
      <thead>
        <tr>
          <th>제목</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in items">
          <td>
            <a @click="goToDetail(item.id)" class="link">{{ item.title }}</a>
          </td>
          <td>{{ item.author }}</td>
        </tr>
      </tbody>
    </table>
    <pagination :totalCount="totalCount" @change-page="changePage" />
  </div>
</template>
<script>
import Pagination from '@/components/fragments/Pagination'
export default {
  name: '',
  components: { Pagination },
  data() {
    return {
      items: [],
      totalCount: 0
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getData()
  },
  unmounted() {},
  methods: {
    async getData() {
      this.totalCount = (await this.$get('/posts')).length
      this.items = await this.$get('/posts?_page=1&_limit=10')
    },
    async changePage(pageNo) {
      console.log('pageNo', pageNo)
      this.items = await this.$get(`/posts?_page=${pageNo}&_limit=10`)
    },
    goToDetail(id) {
      this.$router.push({ path: '/template/bulletindetail', query: { id: id } })
    }
  }
}
</script>
<style scoped>
.search-container {
  padding: 10px;
}

.search-container:after {
  clear: none;
}

.search-container > div {
  float: left;
  margin-right: 10px;
}

.search-container .label {
  margin-right: 5px;
  font-weight: bold;
}

.search-container button {
  margin-right: 5px;
}

.data-grid {
  width: 100%;
}

.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}

.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 5px;
}

.data-grid th {
  cursor: pointer;
}

.data-grid td input {
  width: 100%;
}

.link {
  cursor: pointer;
  text-decoration: underline;
}

.table-container {
  margin-top: 10px;
  padding: 10px;
}
</style>
