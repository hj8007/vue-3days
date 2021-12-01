<template>
  <input type="text" @keydown="checkInt(event)" />
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkInt(e) {
      if (
        !(
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          e.keyCode === 8 ||
          e.keyCode === 46 ||
          e.keyCode === 37 ||
          e.keyCode === 39
        )
      ) {
        e.preventDefault()
      }
    }
  }
}
</script>
