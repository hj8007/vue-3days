<template>
  <div>
    <h1>{{ $translate('ko.hi', user) }}</h1>
    <button>{{ $translate('ko.search') }}</button>
    <h1>{{ $translate('en.hi') }}</h1>
    <button>{{ $translate('en.search') }}</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      user: { name: '아무개' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
