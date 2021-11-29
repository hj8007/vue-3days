<template>
  <div>
    <img src="@/assets/logo.png" alt="" />
    <div>
      <input type="text" v-model="txt1" />
      <button :disabled="txt1 === ''">조회</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      imgSrc: 'https://v3.vuejs.org/logo.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
