<template>
  <div>
    <div :style="style1">인라인 스타일 바인딩</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      style1: { color: 'red', fontSize: '30px' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
