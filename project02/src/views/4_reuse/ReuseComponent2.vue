<template>
  <div>
    <button @click="getUserList">조회</button>
    <button @click="doDelete">삭제</button>
    <simple-grid
      :headers="headers"
      :items="userList"
      :selectType="selectType"
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
      userList: [],
      checkcedItem: '',
      checkcedItems: [],
      selectType: 'radio'
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
      // name, email, phone, company, address
      console.log(this.userList)
    },
    doChange(data) {
      if (this.selectType === 'radio') {
        this.checkcedItem = data
      } else if (this.selectType === 'checkbox') {
        this.checkcedItems = data
      }

      console.log(data)
    },
    async doDelete() {
      this.$swal
        .fire({
          title: 'Do you want to delete?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Delete'
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            // this.chekcedItem
            const r = await axios.delete(
              `http://localhost:3000/users/${this.checkcedItem}`
            )
            console.log(r)
            this.getUserList()
            this.$swal('Deleted!', '', 'success')
          }
        })
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
