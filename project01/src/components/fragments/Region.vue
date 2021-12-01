<template>
  <select v-model="selectedRegion" @change="doChange">
    <option :value="item.code" :key="i" v-for="(item, i) in list">{{
      item.text
    }}</option>
  </select>
</template>
<script>
export default {
  name: 'region',
  props: {
    eventName: {
      type: String,
      default: 'changeRegion'
    }
  },
  data() {
    return {
      selectedRegion: '',
      list: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getList()
  },
  unmounted() {},
  methods: {
    doChange() {
      this.$emit(this.eventName, this.selectedRegion)
    },
    getList() {
      this.list = [
        { code: '', text: '===지역을 선택하세요===' },
        { code: '02', text: '서울' },
        { code: '064', text: '제주' },
        { code: '21', text: '부산' }
      ]
    }
  }
}
</script>
