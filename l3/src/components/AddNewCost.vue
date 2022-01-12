<template>
    <div>
        <button @click="showForm" :class="$style.settings__btn">Add new cost</button>
    </div>
</template>

<script>
export default {
  name: 'AddNewCost',
  data: () => ({
    showComp: false,
  }),
  methods: {
    showForm() {
      this.$emit('show-form');
    },
  },
};
</script>

<style module lang="scss">
.settings__btn {
  padding: 12px 30px;
  background-color: rgba(0, 199, 60, 0.671);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 15px 0;
}
</style>
