<template>
  <div>
    <Child @send-message="sendMessage" />
  </div>
</template>
<script>
import Child from '@/components/fragments/ControlParentChild.vue'
export default {
  name: '',
  components: { Child },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendMessage(data) {
      console.log(data)
    }
  }
}
</script>
