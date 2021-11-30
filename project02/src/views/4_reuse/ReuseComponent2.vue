<template>
  <div>
    <button @click="getUserList">조회</button>
    <button @click="doDelete">삭제</button>
    <simple-grid
      :headers="headers"
      :items="userList"
      selectType="radio"
      checkedKey="id"
      eventName="change-item"
      @change-item="doChange"
    />
  </div>
</template>
<script>
import axios from 'axios'
import SimpleGrid from '@/components/SimpleGrid.vue'

export default {
  name: '',
  components: { 'simple-grid': SimpleGrid },
  data() {
    return {
      headers: [
        { title: 'Name', key: 'name' },
        { title: 'Email', key: 'email' },
        { title: 'Phone', key: 'phone' },
        { title: 'Company', key: 'company' },
        { title: 'Gender', key: 'gender' },
        { title: 'Address', key: 'address' }
      ],
      userList: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    // this.getUserList()
  },
  unmounted() {},
  methods: {
    async getUserList() {
      this.userList = (await axios.get('http://localhost:3000/users')).data
      console.log(this.userList)
    },
    doChange(data) {
      if (this.selectType === 'radio') {
        this.chekcedItem = data
      } else if (this.selectType === 'checkbox') {
        this.chekcedItems = data
      }
      console.log(data)
    },
    async doDelete() {
      // this.chekcedItem
      const r = await axios.delete(
        `http://localhost:3000/users/${this.chekcedItem}`
      )
      console.log(r)
      this.getUserList()
    }
  }
}
</script>
