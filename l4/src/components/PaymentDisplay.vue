<template>
  <div>
    <ul :class="$style.container">
      <li :class="$style.header">
        <span>#</span>
        <span>Date</span>
        <span>Category</span>
        <span>Value</span>
      </li>
      <PaymentsItem
            v-for="(item, index) of showOnPaymentDisplay"
            :key="index"
            :item="item"
            :index="index"
        />
    </ul>
    <PaymentPagination/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PaymentsItem from './PaymentsItem.vue';
import PaymentPagination from './PaymentPagination.vue';

export default {
  name: 'PaymentDisplay',
  components: {
    PaymentsItem,
    PaymentPagination,
  },
  computed: {
    ...mapGetters([
      'showOnPaymentDisplay',
    ]),
  },
};
</script>

<style module lang="scss">
.container {
    width: 450px;
}
.header {
    display: grid;
    align-items: center;
    grid-template-columns: 50px 150px 200px 50px;

    min-height: 50px;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    font-weight: 700;
}
</style>
