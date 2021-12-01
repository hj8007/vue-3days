<template>
  <div>
    <h2>{{ $t('ko.hi', { name: 'Jeremy' }) }}</h2>
    <!-- $translate으로 사용-->
    <h2>{{ i18n.en.hi }}</h2>
    <!-- inject로 사용-->
  </div>
</template>

<script>
export default {
  inject: ['i18n'], //  provide로 전달된 i18n을 inject로 사용할 수 있음
  mounted() {
    console.log(this.i18n)
  }
}
</script>
