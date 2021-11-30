<template>
  <div>
    <button @click="goToList">목록</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: '',
      userId: '',
      userInfo: {},
      searchTxt: ''
    }
  },
  setup() {},
  created() {
    console.log(this.$route.params)
    this.userId = this.$route.params.id
    this.searchTxt = this.$route.params.searchTxt
  },
  mounted() {
    this.getUserInfo()
  },
  unmounted() {},
  methods: {
    async getUserInfo() {
      this.userInfo = await this.$get(`/users/${this.userId}`)
      console.log(this.userInfo)
    },
    goToList() {
      this.$router.push({
        name: 'DataBindingListServer',
        params: { searchTxt: this.searchTxt }
      })
    }
  }
}
</script>
