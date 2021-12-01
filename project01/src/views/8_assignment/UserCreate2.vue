<template>
  <div>
    <div class="container">
      <h1>회원가입</h1>
      <p>계정 생성을 위해서 다음 정보를 작성해주세요.</p>
      <hr />

      <label><b>이름*</b></label>
      <input type="text" placeholder="이름을 입력하세요" />

      <label><b>이메일*</b></label>
      <input type="text" placeholder="이메일 주소를 입력하세요" />

      <label><b>비밀번호*</b></label>
      <input type="password" placeholder="비밀번호를 입력하세요" />

      <label><b>비밀번호 확인*</b></label>
      <input type="password" placeholder="비밀번호를 다시 입력하세요" />

      <label class="full"><b>전화번호*</b></label>
      <input type="tel" placeholder="010" />
      -
      <input type="tel" placeholder="0000" />
      -
      <input type="tel" placeholder="0000" />

      <label class="full"><b>성별</b></label>
      <label><input type="radio" value="M" /> 남</label>
      <label><input type="radio" value="F" /> 여</label>

      <label class="full"><b>관심사</b></label>
      <label style="margin-right:10px;"
        ><input type="checkbox" value="AI" /> 인공지능</label
      >
      <label style="margin-right:10px;"
        ><input type="checkbox" value="BC" /> 블록체인</label
      >
      <label style="margin-right:10px;"
        ><input type="checkbox" value="IOT" /> IoT</label
      >
      <label style="margin-right:10px;"
        ><input type="checkbox" value="MB" /> 메타버스</label
      >
      <hr />

      <button class="registerbtn">가입하기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
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
