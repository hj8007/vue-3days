<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in items">
          <td>{{ item.name }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
    <pagination
      :totalCount="totalCount"
      :pageCnt="pageCnt"
      @change-page="changePage"
    />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue'
export default {
  name: '',
  components: { pagination: Pagination },
  data() {
    return {
      items: [],
      totalCount: 0,
      pageCnt: 5
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
      this.totalCount = (await this.$get('/users')).length
      this.items = await this.$get(`/users?_page=1&_limit=${this.pageCnt}`)
    },
    async changePage(pageNo) {
      this.items = await this.$get(
        `/users?_page=${pageNo}&_limit=${this.pageCnt}`
      )
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #222;
  padding: 10px;
}
</style>
