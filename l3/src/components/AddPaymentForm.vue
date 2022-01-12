<template>
    <div>
        <input type="text" v-model="amount" placeholder="Amount">
        <input type="text" v-model="type" placeholder="Type of cost">
        <input type="datetime" v-model="date" placeholder="Date costs">
        <button @click="addCosts">ADD</button>
    </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    amount: '',
    type: '',
    date: '',
  }),
  computed: {
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    addCosts() {
      const data = {
        amount: +this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate,
      };
      this.$emit('add-costs', data);
    },
  },
};
</script>

<style module lang="scss">

</style>
