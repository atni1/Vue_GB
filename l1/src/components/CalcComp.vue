<template>
  <div>
    <div class="main">
        <label class="argument" for="arg1">
            <input id="arg1" type="text" v-model="arg1" placeholder="Введите число 1">
        </label>
        <label class="argument" for="arg2">
            <input id="arg2" type="text" v-model="arg2" placeholder="Введите число 2">
        </label>
        <strong>= {{ result }}</strong>
        <div class="operat">
            <button @click="sum">+</button>
            <button @click="del">-</button>
            <button @click="div">/</button>
            <button @click="mult">x</button>
            <button @click="deg">^</button>
            <button @click="int_div">/1</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComp',
  data: () => ({
    arg1: '',
    arg2: '',
    result: 0,
  }),
  methods: {
    sum() {
      this.result = +this.arg1 + +this.arg2;
    },
    del() {
      this.result = +this.arg1 - +this.arg2;
    },
    div() {
      this.result = +this.arg1 / +this.arg2;
    },
    mult() {
      this.result = +this.arg1 * +this.arg2;
    },
    deg() {
      this.result = this.arg1 ** +this.arg2;
    },
    int_div() {
      this.result = +this.arg1 % +this.arg2;
    },
  },
};
</script>

<style model lang="scss">
.main {
    background-color: rgb(143, 134, 134);
    width: 600px;
    display: flex;
    flex-direction: column;
}
#arg1, #arg2 {
    margin: 10px ;
    padding: 15px;
}
strong{
    font-size: 30px;
}
.operat {
    display: flex;
    justify-content: center;
}
button {
    margin: 10px;
    padding: 15px;
}
</style>
