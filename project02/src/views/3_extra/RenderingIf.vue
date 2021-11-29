<template>
  <div>
    <div v-if="userRole === 'Admin'">
      <button>조회</button>
      <button>생성</button>
      <button>삭제</button>
    </div>
    <div v-else-if="userRole === 'Manager'">
      <button>조회</button>
      <button>생성</button>
    </div>
    <div v-else>
      <button>조회</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      userRole: 'User'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
