## 리스트 조회
`await this.$get('/users')`

## 상세 조회
`await this.$get('/users/' + this.id)`

## 조건 조회
`await this.$get('/users?name_like=')`

## 생성
`await this.$post('/users', {
            name: this.name,
            email: this.email,
            company: this.company,
            phone: this.phone,
            address: this.address,
            gender: this.gender
          })`


## 수정
`await this.$put('/users/' + this.id, {
        name: this.name,
            email: this.email,
            company: this.company,
            phone: this.phone,
            address: this.address,
            gender: this.gender
      })`

## 삭제
`await this.$delete('/users/' + this.id)`