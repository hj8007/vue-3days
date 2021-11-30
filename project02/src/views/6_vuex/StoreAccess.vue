<template>
  <div>
    <h1 v-if="userInfo.name">Welcom {{ userInfo.name }}</h1>
    <div>
      <label for="">ID: </label>
      <input type="text" v-model="userId" v-focus />
    </div>
    <div>
      <label for="">PASSWORD: </label>
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
      userid: '',
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
