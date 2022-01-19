<template>
  <div id="app" :class="$style.app">
    <header :class="$style.head">
      <div :class="$style.header__title"><span>My personal costs</span></div>
    </header>
    <main>
      <AddNewCost @show-form="showForm"/>
      <AddPaymentForm v-show="showComp" @add-costs="addCosts"/>
      <PaymentDisplay :itemsCost="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddPaymentForm from './components/AddPaymentForm.vue';
import AddNewCost from './components/AddNewCost.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    AddNewCost,
  },
  data: () => ({
    showComp: false,
    paymentsList: [],
  }),
  methods: {
    showForm() {
      // console.log('click');
      this.showComp = !this.showComp;
    },
    addCosts(data) {
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          amount: 150,
          type: 'food',
          date: '10.1.2022',
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style module lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 1140px;
}
.head {
  background-color: rgb(0, 255, 76);
  .header__title {
    display: flex;
    justify-content: center;
    font-size: 48px;
    inline-size: 42px;
    font-weight: 700;
    padding: 10px;
    width: 100%;
  }
}
</style>
