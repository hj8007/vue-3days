<template>
  <div></div>
</template>
<script>
import axios from 'axios'

export default {
  name: '',
  components: {},
  data() {
    return {
      userList: []
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
      this.userList = (await axios.get('http://localhost:3000/users')).data
      console.log(this.userList)
    }
  }
}
</script>
