<template>
  <div>
    <input
      type="text"
      v-model="txt1"
      @keydown="test()"
      @keypress="test()"
      @keyup="test()"
    />
    <input type="text" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
    <br />
    <input type="number" maxlength="3" v-model="tel1" v-move="[3, 'tel2']" />
    <input
      type="number"
      maxlength="4"
      v-model="tel2"
      ref="tel2"
      id="tel2"
      @keyup="moveTel3"
    />
    <input type="number" maxlength="4" v-model="tel3" ref="tel3" />
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
      sel: '',
      tel1: '',
      tel2: '',
      tel3: '',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log('조회 실행')
    },
    myFunction() {
      console.log('클릭 이벤트 발생')
    },
    moveTel2() {
      if (this.tel1.length === 3) {
        this.$refs.tel2.focus()
      }
    },
    moveTel3() {
      if (this.tel2.length === 4) {
        this.$refs.tel3.focus()
      }
    },
    test() {
      console.log(event.type, this.txt1)
    }
  }
}
</script>
