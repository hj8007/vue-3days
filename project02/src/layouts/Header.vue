<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <a @click="goTo('/about')">About</a> |
    <router-link to="/databinding/string">DataBinding</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    goTo(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
