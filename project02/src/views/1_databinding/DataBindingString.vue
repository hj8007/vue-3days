<template>
  <div>
    <h1>Hello {{ title1 }}</h1>
    <h1 v-if="userInfo.name">Welcome {{ userInfo.name }}</h1>
    <Datepicker v-model="date"></Datepicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title1: 'World2',
      date: null
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
