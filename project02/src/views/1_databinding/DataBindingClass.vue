<template>
  <div>
    <input type="number" v-model.number="num1" />
    <div class="container" :class="{ 'txt-red': num1 === 3 }">
      클래스 바인딩
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
      hasError: false,
      num1: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
  border: 1px solid black;
}

.txt-red {
  color: red;
}
</style>
