<template>
  <div>
    <input type="text" v-model="valueModel" />
    <h1>{{ valueModel }}</h1>
    <input type="number" v-model="numberModel" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueModel: 'South Korea',
      numberModel: 3
    }
  }
}
</script>
