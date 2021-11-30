<template>
  <div>
    <h1>
      {{ title }} (<small>{{ subTitle }}</small
      >) {{ title3 }}
    </h1>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다'
    },
    subTitle: {
      type: String,
      default: '부제목'
    }
  },
  components: {},
  data() {
    return {
      title3: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
