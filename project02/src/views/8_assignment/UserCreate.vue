<template>
  <div>
    <h1>회원가입</h1>
    계정 생성을 위해서 다음 정보를 작성해주세요.
    <h3>이름*</h3>
    <input type="text" v-model="user.name" placeholder="이름을 입력하세요" />
    <h3>이메일*</h3>
    <input
      type="text"
      v-model="user.email"
      placeholder="이메일 주소를 입력하세요"
    />
    <h3>비밀번호*</h3>
    <input
      type="password"
      v-model="user.pw"
      placeholder="비밀번호를 입력하세요"
    />
    <h3>비밀번호 확인*</h3>
    <input
      type="password"
      v-model="user.confirmPW"
      placeholder="비밀번호를 다시 입력하세요"
      @blur="confirmPassword"
    />
    <h3>전화번호*</h3>
    <input
      type="text"
      v-model="tel1"
      placeholder="010"
      ref="tel1"
      @keyup="moveTel2"
    />
    <input
      type="text"
      v-model="tel2"
      placeholder="0000"
      ref="tel2"
      @keyup="moveTel3"
    />
    <input type="text" v-model="tel3" placeholder="0000" ref="tel3" />
    <h3>성별*</h3>
    <label><input type="radio" value="M" v-model="user.gender" /> 남</label>
    <label><input type="radio" value="F" v-model="user.gender" /> 여</label>
    <h3>관심사*</h3>
    <label
      ><input type="checkbox" value="AI" v-model="user.interest" />
      인공지능</label
    >
    <label
      ><input type="checkbox" value="BC" v-model="user.interest" />
      블록체인</label
    >
    <label
      ><input type="checkbox" value="IOT" v-model="user.interest" /> IoT</label
    >
    <label
      ><input type="checkbox" value="MC" v-model="user.interest" />
      메타버스</label
    >
    <div>
      <button @click="doSave">가입하기</button>
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
        pw: '',
        confirmPW: '',
        tel1: '',
        tel2: '',
        tel3: '',
        gender: '',
        interest: []
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSave() {
      console.log(this.user)
    },
    confirmPassword() {
      if (this.pw !== this.confirmPassword) {
        console.log('비밀번호가 일치하지 않습니다')
      }
    },
    moveTel2() {
      if (this.tel1.length === 3) {
        this.$refs.tel2.focus()
      }
    },
    moveTel3() {
      if (this.tel2.length === 4) {
        this.$refs.tel3.focus()
      }
    }
  }
}
</script>
