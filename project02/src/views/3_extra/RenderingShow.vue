<template>
  <div>
    <label><input type="radio" value="AI" v-model="selected" /> 인공지능</label>
    <label><input type="radio" value="BC" v-model="selected" /> 블록체인</label>
    <label><input type="radio" value="IOT" v-model="selected" /> IoT</label>
    <label><input type="radio" value="OTH" v-model="selected" /> 기타</label>
    <input type="text" v-model="othDesc" v-show="selected === 'OTH'" />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      selected: '',
      othDesc: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
