<template>
  <div>
    <PageTitle :title="title" subTitle="(매출)" ref="pagetitle" />
    <button @click="doChange"></button>
  </div>
</template>
<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
  name: '',
  components: { PageTitle },
  data() {
    return {
      title: '2021년 4/4분기 매출내역서'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doChange() {
      this.$refs.pagetitle.title3 = '테스트 제목'
    }
  }
}
</script>
