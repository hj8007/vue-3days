<template>
  <div>
    <input type="number" v-model.number="num1" />
    <div :class="{ 'text-red': num1 === 3, container: true }">
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
      hasError: true,
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

.text-red {
  color: red;
}
</style>
