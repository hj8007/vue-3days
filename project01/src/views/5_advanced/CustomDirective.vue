<template>
  <div>
    <div><input type="text" v-focus /></div>
    <div><input type="text" v-blur:[required] /></div>
    <div><input type="text" v-number /></div>
    <div><input type="text" v-float /></div>
  </div>
</template>
<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    },
    blur: {
      mounted(el, binding) {
        if (binding.arg) {
          el.addEventListener('blur', () => {
            if (el.value === '') {
              alert('필수 입력 값입니다.')
            }
          })
        }
      }
    },
    number: {
      mounted(el, binding) {
        el.addEventListener('keydown', e => {
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
        })
      }
    },
    float: {
      mounted(el, binding) {
        el.addEventListener('keydown', e => {
          if (
            !(
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              e.keyCode === 190 ||
              e.keyCode === 8 ||
              e.keyCode === 46 ||
              e.keyCode === 37 ||
              e.keyCode === 39
            )
          ) {
            e.preventDefault()
          }
        })
      }
    }
  },
  data() {
    return {
      required: true,
      txt: 'abc'
    }
  }
}
</script>
