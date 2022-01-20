<template>
  <div>
    <button :class="$style.button" @click="showForm">ADD NEW COST +</button>
      <form v-show="show" @submit.prevent="saveHandler">
          <input :class="$style.input" placeholder="Date" v-model="date"><br>
          <label for="category">
            <select :class="$style.select" id="category" v-model="category">
              <option
                v-for="category of categoryList"
                :value="category"
                :key="category"
              >
                {{ category }}
              </option>
            </select>
          </label><br>
          <input :class="$style.input" placeholder="Value" v-model="value"><br>
          <button :class="$style.button" type="submit">ADD</button>
      </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddPaymentForm',
  data: () => ({
    date: '',
    category: '',
    value: '',
    show: false,
  }),
  computed: {
    ...mapGetters(['categoryList']),
    currentDay() {
      const today = new Date();
      const day = today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    ...mapActions([
      'addNewPayment',
      'fetchCategoryList',
    ]),
    showForm() {
      this.show = !this.show;
    },
    resetData() {
      this.value = '';
      this.category = '';
      this.date = '';
    },
    saveHandler() {
      const data = {
        date: this.date || this.currentDay,
        category: this.category,
        value: +this.value,
      };
      // попробовать через $emit
      this.addNewPayment(data);
      this.resetData();
    },
  },
  created() {
    this.fetchCategoryList();
  },
};
</script>

<style module lang="scss">
.button {
    padding: 10px 20px;
    background-color: rgb(77, 94, 151);
    border: 0;
    color: rgb(236, 236, 236);
    transition: 0.3s all ease;
    margin-bottom: 15px;
    &:hover {
        background-color: lighten($color: rgb(73, 107, 219), $amount: 10);
        cursor: pointer;
    }
}
.input, .select {
    padding: 10px;
    border: 0;
    outline: 1px solid rgba($color: #000000, $alpha: 0.3);
    margin-bottom: 5px;
}
.input {
    width: 300px;
}
.select {
    width: 320px;
}
</style>
