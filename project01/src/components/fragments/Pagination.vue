<template>
  <div class="pagination">
    <a @click="prevPage" v-show="pageRange[0] > 1">&laquo;</a>
    <a
      @click="changePage(page)"
      :class="{ active: page == currentPage }"
      :key="page"
      v-for="page in pageRange"
      >{{ page }}</a
    >
    <a @click="nextPage" v-show="pageRange[pageRange.length - 1] < totalPage"
      >&raquo;</a
    >
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  components: {},
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    pageCnt: {
      type: Number,
      default: 10
    },
    eventName: {
      type: String,
      default: 'change-page'
    }
  },
  watch: {
    totalCount() {
      this.paging()
    }
  },
  data() {
    return {
      totalPage: 1,
      currentPage: 1,
      pageRange: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.paging()
  },
  unmounted() {},
  methods: {
    paging() {
      this.totalPage = Math.ceil(this.totalCount / this.pageCnt)

      if (this.totalPage > 5) {
        this.pageRange = [1, 2, 3, 4, 5]
      } else {
        var pageRange = []
        for (var i = 1; i <= this.totalPage; i++) {
          pageRange.push(i)
        }

        this.pageRange = pageRange
      }
    },
    prevPage() {
      const pageNo = this.pageRange[0]
      this.currentPage = pageNo
      this.pageRange = [
        pageNo - 5,
        pageNo - 4,
        pageNo - 3,
        pageNo - 2,
        pageNo - 1
      ]
    },
    nextPage() {
      const pageNo = this.pageRange[this.pageRange.length - 1]
      this.currentPage = pageNo
      const startIdx = pageNo + 1
      let endIdx = pageNo + 5
      if (endIdx > this.totalPage) {
        endIdx = this.totalPage
      }

      const pageRange = []
      for (let i = startIdx; i <= endIdx; i++) {
        pageRange.push(i)
      }

      this.pageRange = pageRange
    },
    changePage(pageNo) {
      this.currentPage = pageNo
      this.$emit(this.eventName, this.currentPage)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: inline-block;
  margin-top: 5px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.pagination a.active {
  background-color: deeppink;
  color: white;
}
</style>
