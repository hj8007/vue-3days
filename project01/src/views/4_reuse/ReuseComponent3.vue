<template>
  <div>
    <input type="text" v-model="materialCode" />
    <button @click="openModal">선택</button>
    <MaterialModal :show="bShow" @select-material="selectMaterial" />
  </div>
</template>
<script>
import MaterialModal from '@/components/erp/MaterialModal.vue'

export default {
  name: '',
  components: { MaterialModal },
  data() {
    return {
      materialCode: '',
      bShow: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    selectMaterial(data) {
      console.log(data)
      this.materialCode = data
      this.bShow = false
    },
    openModal() {
      this.bShow = true
    }
  }
}
</script>
