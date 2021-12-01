<template>
  <div>
    <select v-model="selectedGender" @change="getUserList">
      <option value="">전체</option>
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user._id" v-for="user in userList">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: '',
  components: {},
  data() {
    return {
      userList: [],
      selectedGender: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList()
  },
  unmounted() {},
  methods: {
    async getUserList() {
      if (this.selectedGender === '') {
        this.userList = (await axios.get('http://localhost:3000/users')).data
      } else {
        this.userList = (
          await axios.get(
            `http://localhost:3000/users?gender=${this.selectedGender}`
          )
        ).data
      }
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
