<template>
  <div>
    <input type="text" v-model="txt1" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
    <div>
      <input type="text" maxlength="3" v-model="tel1" v-move="[3, 'tel2']" />
      <input
        type="text"
        maxlength="4"
        v-model="tel2"
        id="tel2"
        v-move="[4, 'tel3']"
      />
      <input type="text" maxlength="4" v-model="tel3" id="tel3" />
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  directives: {
    move: {
      mounted(el, binding) {
        el.addEventListener('keyup', () => {
          if (el.value.length === binding.value[0]) {
            document.getElementById(binding.value[1]).focus()
          }
        })
      }
    }
  },
  data() {
    return {
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
    }
  }
}
</script>
