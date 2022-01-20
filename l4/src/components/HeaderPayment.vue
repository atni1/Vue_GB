<template>
  <div>
      <p :class="$style.header__title">My personal costs</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderPayment',
};
</script>

<style module lang="scss">
.header__title {
    font-size: 48px;
    font-weight: 700;
    margin: 0 auto;
}
</style>
