<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="prevPage">Prev</button>
    <button v-for="n in getPageNumbers()" :key="n" @click="changePage(n)" :class="{ active: n === currentPage }">{{ n }}</button>
    <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    onPageChange: {
      type: Function,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    visiblePages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.limit);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.onPageChange(pageNumber);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.onPageChange(this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.onPageChange(this.currentPage - 1);
      }
    },
    getPageNumbers() {
      let start = Math.max(1, this.currentPage - Math.floor(this.visiblePages / 2));
      let end = Math.min(this.totalPages, start + this.visiblePages - 1);
      start = Math.max(1, end - this.visiblePages + 1);
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px;
  margin: 5px;
  border: none;
  background-color: #eee;
  cursor: pointer;
}

.pagination button.active {
  background-color: #333;
  color: #fff;
}
</style>
