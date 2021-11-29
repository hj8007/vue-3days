<template>
  <div>
    <input type="text" v-model="txt1" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
    <div>
      <input type="text" maxlength="3" v-model="tel1" @keyup="moveTel2" />
      <input type="text" maxlength="3" v-model="tel2" ref="tel2" />
      <input type="text" maxlength="3" v-model="tel3" />
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: '',
      txt1: '',
      tel1: '',
      tel2: '',
      tel3: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log('조회가 실행됩니다')
    },
    checkEnter() {
      if (event.keyCode === 13) {
        this.doSearch()
      }
      // console.log(event.keyCode)
    },
    moveTel2() {
      if (this.tel1.length === 3) {
        this.$refs.tel2.focus()
      }
    }
  }
}
</script>
