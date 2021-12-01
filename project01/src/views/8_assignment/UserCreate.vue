<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>이름*</b></label>
      <input type="text" v-model="user.name" placeholder="이름을 입력하세요" />

      <label><b>이메일*</b></label>
      <input
        type="text"
        v-model="user.email"
        placeholder="이메일 주소를 입력하세요"
      />

      <label><b>비밀번호*</b></label>
      <input
        type="password"
        v-model="user.pass"
        placeholder="비밀번호를 입력하세요"
      />

      <label><b>비밀번호 확인*</b></label>
      <input
        type="password"
        v-model="user.repass"
        placeholder="비밀번호를 다시 입력하세요"
      />
      <p class="alert" :class="{ show: !user.pass.startsWith(user.repass) }">
        비밀번호가 동일하지 않습니다.
      </p>

      <label class="full"><b>전화번호*</b></label>
      <input
        type="tel"
        v-model="user.tel1"
        placeholder="010"
        @keyup="moveTel2"
      />
      -
      <input
        type="tel"
        v-model="user.tel2"
        ref="tel2"
        @keyup="moveTel3"
        placeholder="0000"
      />
      -
      <input type="tel" v-model="user.tel3" ref="tel3" placeholder="0000" />

      <label class="full"><b>성별</b></label>
      <label><input type="radio" v-model="user.gender" value="M" /> 남</label>
      <label><input type="radio" v-model="user.gender" value="F" /> 여</label>

      <label class="full"><b>관심사</b></label>
      <label style="margin-right:10px;"
        ><input type="checkbox" v-model="user.interest" value="AI" />
        인공지능</label
      >
      <label style="margin-right:10px;"
        ><input type="checkbox" v-model="user.interest" value="BC" />
        블록체인</label
      >
      <label style="margin-right:10px;"
        ><input type="checkbox" v-model="user.interest" value="IOT" />
        IoT</label
      >
      <label style="margin-right:10px;"
        ><input type="checkbox" v-model="user.interest" value="MB" />
        메타버스</label
      >
      <hr />

      <button class="registerbtn" @click="register">가입하기</button>
    </div>

    <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      user: {
        name: '',
        email: '',
        pass: '',
        repass: '',
        tel1: '',
        tel2: '',
        tel3: '',
        gender: 'M',
        interest: []
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    register() {
      console.log(this.user)
    },
    checkPass() {
      if (!this.pass.startsWith(this.repass)) {
        alert('비밀번호가 동일하지 않습니다.')
      }
    },
    moveTel2() {
      if (this.user.tel1.length === 3) {
        this.$refs.tel2.focus()
      }
    },
    moveTel3() {
      if (this.user.tel2.length === 4) {
        this.$refs.tel3.focus()
      }
    }
  }
}
</script>
<style scoped>
.alert {
  display: none;
  color: red;
  font-weight: bold;
}

.show {
  display: block;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
  text-align: left;
}

/* Full-width input fields */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type='text']:focus,
input[type='tel']:focus,
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}

input[type='tel'] {
  width: 80px;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type='radio'],
input[type='checkbox'] {
  padding: 15px;
  margin: 5px 0 22px 0;
}

.full {
  width: 100%;
  display: inline-block;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
