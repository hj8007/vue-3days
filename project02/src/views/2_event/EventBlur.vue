<template>
  <div>
    <input type="text" v-model="txt1" @blur="checkRequired" ref="txt1" />
  </div>
</template>
<script>
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
    checkRequired() {
      if (this.txt1 === '') {
        alert('필수 입력값입니다.')
        // this.$refs.txt1.focus()
      }
    }
  }
}
</script>
