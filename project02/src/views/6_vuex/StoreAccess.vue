<template>
  <div>
    <h1 v-if="userInfo.name">Welcome {{ userInfo.name }}</h1>
    <div>
      <label>ID: </label>
      <input type="text" v-model="userId" v-focus />
    </div>
    <div>
      <label>PASS: </label>
      <input type="password" v-model="userPw" />
    </div>
    <button @click="login">로그인</button>
    <button @click="logout">로그아웃</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      userId: '',
      userPw: ''
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    login() {
      this.$store.commit('user', {
        userId: this.userId,
        name: 'John Doe'
      })
    },
    logout() {
      this.$store.commit('user', {})
    }
  }
}
</script>
