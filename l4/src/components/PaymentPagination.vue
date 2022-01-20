<template>
  <div :class="$style.pagination">
    <button @click="SET_CURRENT_PAGE(currentPage - 1)">Предыдущая</button>
    <button
      v-for="page of pagesList"
      :key="page"
      :class="{ [$style.active]: currentPage === page}"
      @click="SET_CURRENT_PAGE(page)"
    >
    {{ page }}
    </button>
    <button @click="SET_CURRENT_PAGE(+currentPage + 1)">Следующая</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PaymentPagination',
  methods: mapMutations(['SET_CURRENT_PAGE']),
  computed: mapGetters([
    'pagesList',
    'currentPage',
  ]),
};
</script>

<style module lang="scss">
button {
  padding: 10px 15px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.pagination {
    display: flex;
    justify-content: center;
    outline: 1px solid rgba($color: #000000, $alpha: 0.3);
    width: 450px;
    margin-left: 40px;
}
.active {
    color: rgb(77, 151, 114);
}
</style>
