<template>
  <div>
    <input type="text" v-model="searchTxt" />
    <button @click="getUserList">조회</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.id" v-for="user in userList">
          <td>
            <a
              style="text-decoration: underline; cursor: pointer"
              @click="goToDetail(user.id)"
              >{{ user.name }}</a
            >
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: '',
  components: {},
  data() {
    return {
      userList: [],
      searchTxt: ''
    }
  },
  setup() {},
  created() {
    // if (this.$route.params.searchTxt) {
    //   this.searchTxt = this.$route.params.searchTxt
    // }
    if (window.sessionStorage.getItem('searchTxt')) {
      this.searchTxt = window.sessionStorage.getItem('searchTxt')
    }
  },
  mounted() {
    // this.getUserList()
  },
  unmounted() {},
  methods: {
    async getUserList() {
      this.userList = await this.$get('/users')
      console.log(this.userList)
    },
    goToDetail(userId) {
      // this.$router.push({
      //   path: '/databinding/userdetail',
      //   query: { id: userId }
      // })

      window.sessionStorage.setItem('searchTxt', this.searchTxt)

      this.$router.push({
        name: 'UserDetail',
        params: { id: userId, searchTxt: this.searchTxt }
      })
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
