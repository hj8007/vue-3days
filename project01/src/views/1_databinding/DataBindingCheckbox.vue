<template>
  <div>
    <label><input type="checkbox" @change="checkAll" />전체</label>
    <label
      ><input
        type="checkbox"
        v-bind:value="seoul"
        v-model="cities"
      />서울</label
    >
    <label><input type="checkbox" value="064" v-model="cities" />제주</label>
    <label><input type="checkbox" value="21" v-model="cities" />부산</label>
    <br />
    <div>선택한 지역: {{ cities }}</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      cities: [],
      chkStatus: false,
      seoul: '02',
      cityList: [
        { v: '02', t: '서울' },
        { v: '064', t: '제주' },
        { v: '21', t: '부산' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkAll() {
      if (!this.chkStatus) {
        this.cities = ['02', '064', '21']
      } else {
        this.cities = []
      }

      this.chkStatus = !this.chkStatus
    }
  }
}
</script>
