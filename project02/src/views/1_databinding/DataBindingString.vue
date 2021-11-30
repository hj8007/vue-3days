<template>
  <div>
    <h1>Hello {{ title1 }}</h1>
    <h1 v-if="userInfo.name">Welcom {{ userInfo.name }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title1: 'World2'
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  mounted() {
    this.$swal('새로운 alert')
  }
}
</script>
<style scoped></style>
