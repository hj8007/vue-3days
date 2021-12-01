<template>
  <div>
    <div v-if="enableFilter">
      <input type="search" v-model="searchText" @keyup.enter="doFilter" />
      <button @click="doFilter">조회</button>
    </div>
    <table class="data-grid">
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th
            :key="i"
            v-for="(h, i) in headers"
            @click="
              showContextMenuIdx == i
                ? (showContextMenuIdx = -1)
                : (showContextMenuIdx = i)
            "
          >
            <div class="dropdown">
              {{ h.title }}
              <ul
                class="dropdown-menu"
                :class="{ show: showContextMenuIdx == i }"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" @click="doAscendingSort(h.key)"
                    >Sort Ascending</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" @click="doDecendingSort(h.key)"
                    >Sort Decending</a
                  >
                </li>
                <li v-if="filterType == 'select'">
                  <select v-model="selOpts[h.key]" @change="doFilter(i)">
                    <option
                      :value="opt"
                      :key="j"
                      v-for="(opt, j) in opts[h.key]"
                      >{{ opt }}</option
                    >
                  </select>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-show="showList.length > 0">
        <tr
          :class="{
            hover: bHover,
            active: checkedItems.filter(s => s.id == item.id).length > 0
          }"
          :key="i"
          v-for="(item, i) in showList"
        >
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-else-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="j" v-for="(h, j) in headers">
            <a
              v-if="h.type === 'link'"
              class="link"
              @click="goToLink(item[h.linkKey], h.eventName)"
              >{{ item[h['key']] }}</a
            >
            <input
              type="text"
              v-else-if="h.type === 'text' && h.editable"
              v-model="item[h['key']]"
            />
            <input
              type="number"
              v-else-if="h.type === 'number' && h.editable"
              v-model.number="item[h['key']]"
            />
            <select
              v-else-if="h.type === 'select' && h.editable"
              v-model="item[h['key']]"
            >
              <option :value="opt.v" :key="opt.v" v-for="opt in h.options">{{
                opt.t
              }}</option>
            </select>
            <input
              type="text"
              v-else-if="h.type === 'date' && h.editable"
              v-model="item[h['key']]"
            />
            <span v-else-if="h.type === 'date'">{{
              convertDateFormat(item[h['key']])
            }}</span>
            <input
              type="text"
              v-else-if="h.type === 'currency' && h.editable"
              v-model="item[h['key']]"
            />
            <span v-else-if="h.type === 'currency'">{{
              convertCurrencyFormat(item[h['key']])
            }}</span>
            <span v-else>{{ item[h['key']] }}</span>
          </td>
        </tr>
      </tbody>
      <tbody v-show="showList.length == 0">
        <tr>
          <td :colspan="headers.length + (selectType != '' ? 1 : 0)">
            No Data.
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination" v-if="enablePaging">
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
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  components: {},
  props: {
    selectType: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      default: function() {
        return []
        // [
        // {
        //  title:'컬럼명',
        //  key:'items의 오브젝트 키',
        //  linkKey:'',
        //  eventName:'',
        //  editable:true,
        //  filterType: 'select', 'date', 'number'
        //  groupSummary: 'none', 'sum', 'average'
        //  type:'text', 'select', 'date', 'currency', 'link'
        //  options:[{v:'', t:''}] - type이 select인 경우
        //  }
        //  ]
      }
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    enableFilter: {
      type: Boolean,
      default: false
    },
    enablePaging: {
      type: Boolean,
      default: true
    },
    pagecnt: {
      type: Number,
      default: 10
    },
    eventName: {
      type: String,
      default: 'change-item'
    },
    checkedKey: {
      type: String,
      default: ''
    },
    checkedColor: {
      type: String,
      default: ''
    },
    bHover: {
      type: Boolean,
      default: false
    },
    dateFormat: {
      type: String,
      default: 'yyyy.MM.dd'
    },
    currencyFormat: {
      type: String,
      default: '#,###'
    }
  },
  data() {
    return {
      filterList: [],
      showList: [],
      checkedItem: '',
      checkedItems: [],
      currentItem: '',
      searchText: '',
      sortKey: '',
      sortValue: 1,
      totalPage: 1,
      currentPage: 1,
      pageRange: [],
      showContextMenuIdx: -1,
      opts: {},
      selOpts: {}
    }
  },
  watch: {
    items() {
      this.filterList = this.items
      this.checkedItem = ''
      this.checkedItems = []
      this.currentItem = ''
      this.searchText = ''
      this.sortKey = ''
      this.sortValue = 1
      this.currentPage = 1
      this.pageRange = []
      this.changePage(1)
      this.paging()
      this.currentPage = 1
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.filterList = this.items
    this.changePage(1)
    this.paging()
    this.currentPage = 1
  },
  unmounted() {},
  changed() {},
  methods: {
    doFilter() {
      const f = this.searchText.toLowerCase()
      if (f === '') {
        this.filterList = this.items
      } else {
        this.filterList = this.items.filter(item => {
          const len = this.headers.length
          let isExist = false
          for (let i = 0; i < len; i++) {
            if (
              item[this.headers[i].key]
                .toString()
                .toLowerCase()
                .indexOf(f) > -1
            ) {
              isExist = true
              break
            }
          }

          return isExist
        })
      }

      this.paging()
      this.changePage(1)
    },
    doSort(key) {
      this.showContextMenuIdx = -1
      this.sortValue = this.sortKey === key ? this.sortValue * -1 : 1

      const sortValue1 = this.sortValue
      const sortValue2 = this.sortValue * -1

      this.filterList = this.filterList.sort(function(a, b) {
        return a[key] > b[key] ? sortValue1 : b[key] > a[key] ? sortValue2 : 0
      })

      this.sortKey = key
      this.changePage(this.currentPage)
    },
    doAscendingSort(key) {
      this.showContextMenuIdx = -1
      this.sortValue = 1

      const sortValue1 = this.sortValue
      const sortValue2 = this.sortValue * -1

      this.filterList = this.filterList.sort(function(a, b) {
        return a[key] > b[key] ? sortValue1 : b[key] > a[key] ? sortValue2 : 0
      })

      this.sortKey = key
      this.changePage(this.currentPage)
    },
    doDecendingSort(key) {
      this.showContextMenuIdx = -1
      this.sortValue = -1

      const sortValue1 = this.sortValue
      const sortValue2 = this.sortValue * -1

      this.filterList = this.filterList.sort(function(a, b) {
        return a[key] > b[key] ? sortValue1 : b[key] > a[key] ? sortValue2 : 0
      })

      this.sortKey = key
      this.changePage(this.currentPage)
    },
    paging() {
      this.totalPage = Math.ceil(this.filterList.length / this.pagecnt)
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
    changePage(pageNo) {
      this.currentPage = pageNo
      const showList = []
      const startIdx = (pageNo - 1) * this.pagecnt
      let endIdx = pageNo * this.pagecnt
      if (endIdx > this.filterList.length) {
        endIdx = this.filterList.length
      }

      if (this.selectType === 'radio') {
        this.checkedItem = ''
      }

      for (let i = startIdx; i < endIdx; i++) {
        showList.push(this.filterList[i])
        if (this.selectType === 'radio') {
          if (this.filterList[i][this.checkedKey] === this.currentItem) {
            this.checkedItem = this.currentItem
          }
        }
      }

      this.showList = showList
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
    doSelect() {
      if (this.selectType === 'radio') {
        this.$emit(this.eventName, this.checkedItem)
        this.currentItem = this.checkedItem
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.eventName, this.checkedItems)
      }
    },
    goToLink(v, eventName) {
      this.$emit(eventName, v)
    },
    convertDateFormat(d) {
      let year = ''
      let month = ''
      let day = ''

      if (typeof d === 'string') {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = d.getMonth() + 1
        month = month.toString().padStart(2, 0)
        day = d.getDate()
      }

      return this.dateFormat
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
    },
    convertCurrencyFormat(amount) {
      let currencyUnit = ''

      if (this.currencyFormat.substring(0, 1) !== '#') {
        currencyUnit = this.currencyFormat.substring(0, 1)
      }

      let groupingSeparator = ''
      let maxFractionDigits = 0
      let decimalSeparator = ''

      if (this.currencyFormat.indexOf('.') === -1) {
        groupingSeparator = ','
      } else if (this.currencyFormat.indexOf(',') === -1) {
        groupingSeparator = '.'
      } else if (
        this.currencyFormat.indexOf(',') < this.currencyFormat.indexOf('.')
      ) {
        groupingSeparator = ','
        decimalSeparator = '.'
        maxFractionDigits =
          this.currencyFormat.length - this.currencyFormat.indexOf('.') - 1
      } else {
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits =
          this.currencyFormat.length - this.currencyFormat.indexOf(',') - 1
      }

      let sign = ''
      let dec = 1
      for (let i = 0; i < maxFractionDigits; i++) {
        dec = dec * 10
      }

      let v = String(Math.round(parseFloat(amount) * dec) / dec)

      if (v.startsWith('-')) {
        sign = '-'
        v = v.substring(1)
      }

      if (
        maxFractionDigits > 0 &&
        this.currencyFormat.substring(this.currencyFormat.length - 1) === '0'
      ) {
        v = String(parseFloat(v).toFixed(maxFractionDigits))
      }

      let d = ''

      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        d = v.substring(v.indexOf('.'))
        d = d.replace('.', decimalSeparator)
        v = v.substring(0, v.indexOf('.'))
      }

      const r = /(\d+)(\d{3})/

      while (r.test(v)) {
        v = v.replace(r, '$1' + groupingSeparator + '$2')
      }
      return sign + currencyUnit + String(v) + String(d)
    }
  }
}
</script>
<style scoped>
.data-grid {
  width: 100%;
}

.data-grid,
.data-grid th,
.data-grid td {
  border-collapse: collapse;
}

.data-grid th,
.data-grid td {
  border: 1px solid #222;
  padding: 5px;
}

.data-grid th {
  cursor: pointer;
}

.data-grid .hover:hover {
  background-color: rgb(255, 235, 249);
}

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

.link {
  cursor: pointer;
  text-decoration: underline;
}

.active {
  background-color: deeppink;
}

*,
::after,
::before {
  box-sizing: border-box;
}

.data-grid .dropdown {
  position: relative;
}

.data-grid .dropdown-menu {
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate3d(0px, 25px, 0px);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #00000026;
  border-radius: 0.25rem;
}

.data-grid .dropdown-menu.show {
  display: block;
}

.data-grid .dropdown-menu > li {
  display: list-item;
  list-style: none;
  text-align: -webkit-match-parent;
}

.data-grid .dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: #0000;
  border: 0;
}
</style>
