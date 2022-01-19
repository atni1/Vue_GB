<template>
  <div>
    <p :class="$style.p_style">
      <b :class="$style.b_style">#</b>
      <b :class="$style.b_style">Type</b>
      <b :class="$style.b_style">Date</b>
      <b :class="$style.b_style">Amount</b>
    </p>
    <div v-for="(item, index) in itemsCost" :key="index">
      <p :class="$style.p_style">
        <span :class="$style.b_style">{{ index + 1 }}</span>
        <span :class="$style.b_style">{{ item.type }}</span>
        <span :class="$style.b_style">{{ item.date }}</span>
        <span :class="$style.b_style">{{ item.amount }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    itemsCost: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style module lang="scss">
.p_style {
  display: flex;
  .b_style {
    padding: 0 30px 0 30px;
  }
}
</style>
