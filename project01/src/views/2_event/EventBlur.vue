<template>
  <div>
    <input type="text" v-model="txt" @blur="doBlur" />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      txt: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doBlur() {
      if (this.txt === '') {
        alert('필수값입니다. 입력하세요.')
      }
    }
  }
}
</script>
