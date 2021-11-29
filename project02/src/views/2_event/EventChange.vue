<template>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      selectedValue: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeSelect() {
      console.log(this.selectedValue)
    }
  }
}
</script>
