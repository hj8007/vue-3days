<template>
  <div>
    <table class="post-table">
      <tr>
        <th>제목</th>
        <td>{{ post.title }}</td>
      </tr>
      <tr>
        <th>내용</th>
        <td>{{ post.body }}</td>
      </tr>
    </table>

    <div>
      <input
        type="text"
        v-model="newComment"
        placeholder="댓글 작성"
        style="width:100%;padding:5px;"
        @keyup.enter="registComment"
      />
    </div>
    <ul class="comments">
      <li :key="comment.id" v-for="comment in comments">
        {{ comment.body }}
      </li>
    </ul>
    <div class="btn-area">
      <button @click="goToList">목록</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      post: {},
      postId: '',
      comments: [],
      newComment: ''
    }
  },
  setup() {},
  created() {
    this.postId = this.$route.query.id
    this.getData()
    this.getComment()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getData() {
      this.post = await this.$get(`/posts/${this.postId}`)
    },
    async getComment() {
      this.comments = await this.$get(
        `/comments?postId=${this.postId}&_sort=id&_order=desc`
      )
      console.log(this.comments)
    },
    async registComment() {
      const r = await this.$post('/comments', {
        postId: this.postId,
        body: this.newComment
      })

      console.log(r)
      this.newComment = ''

      this.getComment()
    },
    goToList() {
      this.$router.push({ path: '/template/bulletin' })
    }
  }
}
</script>
<style scoped>
.post-table {
  width: 100%;
  margin-bottom: 10px;
}

.post-table,
.post-table th,
.post-table td {
  border-collapse: collapse;
}

.post-table th,
.post-table td {
  border: 1px solid #222;
  padding: 10px;
}

.comments {
  list-style: none;
  text-align: left;
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
