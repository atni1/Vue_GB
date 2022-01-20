<template>
    <div :class="$style.item">
      <span>{{ index + 1 }}</span>
      <span>{{ item.date }}</span>
      <span>{{ item.category }}</span>
      <span>{{ item.value }}</span>
    </div>
</template>

<script>
export default {
  name: 'PaymentsItem',
  props: {
    item: {
      type: Object,
      default: () => ({
        date: '-',
        category: '-',
        value: '-',
      }),
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style module lang="scss">

.item {
  display: grid;
  align-items: center;

  min-height: 50px;
  grid-template-columns: 50px 150px 200px 50px;

  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
}
</style>
