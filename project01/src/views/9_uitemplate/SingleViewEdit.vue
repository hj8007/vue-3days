<template>
  <div class="container">
    <table class="customer-table">
      <tr>
        <th>고객 선택</th>
        <td>
          <select
            v-model="customerId"
            @change="changeCustomer"
            style="width: 100%"
          >
            <option value="">==고객을 선택하세요==</option>
            <option :value="item.id" :key="item.id" v-for="item in items">
              {{ item.name }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>고객명</th>
        <td><input type="text" v-model="customer.name" /></td>
      </tr>
      <tr>
        <th>회사명</th>
        <td><input type="text" v-model="customer.company" /></td>
      </tr>
      <tr>
        <th>이메일</th>
        <td><input type="text" v-model="customer.email" /></td>
      </tr>
      <tr>
        <th>연락처</th>
        <td><input type="text" v-model="customer.phone" /></td>
      </tr>
      <tr>
        <th>주소</th>
        <td><input type="text" v-model="customer.address" /></td>
      </tr>
    </table>

    <div class="btn-area">
      <button @click="doSave">저장</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      items: [],
      customer: {},
      customerId: ''
    }
  },
  setup() {},
  created() {
    this.getCustomer()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async result => {
        if (result.isConfirmed) {
          const { name, company, email, phone, address } = this.customer
          const r = await this.$put(`/users/${this.customerId}`, {
            name,
            company,
            email,
            phone,
            address
          })
          console.log('result', r)

          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    async changeCustomer() {
      if (this.customerId === '') {
        this.customer = {
          name: '',
          company: '',
          email: '',
          phone: '',
          address: ''
        }
        return
      }
      this.customer = await this.$get(`/users/${this.customerId}`)
    },
    async getCustomer() {
      this.items = await this.$get('/users')
    }
  }
}
</script>
<style scoped>
.customer-table {
  width: 100%;
}

.customer-table,
.customer-table th,
.customer-table td {
  border-collapse: collapse;
}

.customer-table th,
.customer-table td {
  border: 1px solid #222;
  padding: 10px;
}

.customer-table th {
  text-align: right;
}

.customer-table td input {
  width: 100%;
}

.btn-area {
  text-align: center;
  margin-top: 10px;
}

.btn-area button {
  padding: 5px;
  margin-right: 5px;
}
</style>
