<template>
  <table>
    <thead>
      <tr>
        <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
        <th :key="i" v-for="(h, i) in headers">{{ h.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <td v-if="selectType === 'radio'">
          <input
            type="radio"
            :value="item[checkedKey]"
            v-model="checkedItem"
            @change="doChange"
          />
        </td>
        <td v-else-if="selectType === 'checkbox'">
          <input
            type="checkbox"
            :value="item[checkedKey]"
            v-model="checkedItems"
            @change="doChange"
          />
        </td>
        <td :key="j" v-for="(h, j) in headers">{{ item[h['key']] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    eventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doChange() {
      if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkedItem)
        // console.log(this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
        // console.log(this.checkedItems)
      }
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #222;
  padding: 10px;
}
</style>
