<template>
  <div id="app">
    <HeaderPayment/>
    <AddPaymentForm/>
    <PaymentDisplay/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddPaymentForm from './components/AddPaymentForm.vue';
import HeaderPayment from './components/HeaderPayment.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    HeaderPayment,
  },
  methods: mapActions(['fetchData', 'getPage']),
  created() {
    this.fetchData();
    this.getPage();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1170px;
  padding: 0 15px;
  // margin: 0 auto;
}
</style>
