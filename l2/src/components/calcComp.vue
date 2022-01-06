<template>
    <div>
        <div class="main">
            <label class="argument" for="arg1">
                <input id="arg1" type="text" v-model.number="arg1" placeholder="Введите число 1">
            </label>
            <label class="argument" for="arg2">
                <input id="arg2" type="text" v-model.number="arg2" placeholder="Введите число 2">
            </label>
            <strong>= {{ result }}</strong>
        </div>
        <button class="btn__operant" v-for="operant in operants" @click="calculate(operant)" :key="operant">
            {{ operant }}
        </button>
        <div class="keyboard">
            <label for="showKB">
                <input type="checkbox" name="checkBox" id="showKB" v-model="checkCheckBox">
                Отобразить экранную клавиатуру
            </label>
            <div class="keyboard__number" v-show="checkCheckBox">
                <button class="btn__number" v-for="(numb, index) in numbers" :key="index" @click="inputPrint(numb)">
                {{ numb }}
                </button>
                <button class="btn__del" @click="cleanInput()">
                Delet
                </button>
            </div>
        </div>
        <div class="radio__button">
            <label for="radio__arg1">
                <input type="radio" name="radioNumber" id="radio__arg1" value="1" v-model="entryField">
                Операнд 1
            </label>
            <label for="radio__arg2">
                <input type="radio" name="radioNumber" id="radio__arg2" value="2" v-model="entryField">
                Операнд 2
            </label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'calcComp',
  data: () => ({
    arg1: '',
    arg2: '',
    result: 0,
    checkCheckBox: '',
    operants: ['+', '-', '*', '/', '**', '%'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    entryField: '1'
  }),
  methods: {
    calculate (operant) {
      const { arg1, arg2 } = this
      switch (operant) {
        case '+': this.result = +arg1 + +arg2; break
        case '-': this.result = +arg1 - +arg2; break
        case '*': this.result = +arg1 * +arg2; break
        case '/': this.result = +arg1 / +arg2; break
        case '**': this.result = arg1 ** +arg2; break
        case '%': this.result = +arg1 * +arg2; break
        default:
          break
      };
    },
    inputPrint (numb) {
      if ((this.entryField) === '1') this.arg1 = +(this.arg1 + numb)
      else this.arg2 = +(this.arg2 + numb)
    },
    cleanInput () {
      if (this.entryField === '1') {
        const updateNumb = this.delLastNumber(this.arg1)
        if (updateNumb !== '') {
          this.arg1 = updateNumb
        }
      } else {
        const updateNumb = this.delLastNumber(this.arg2)
        if (updateNumb !== '') {
          this.arg2 = updateNumb
        }
      }
    },
    delLastNumber (value) {
      const str = value.toString()
      if (str.length < 1) {
        return null
      }
      value = +(str.slice(0, -1))
      if (isNaN(value)) {
        value = 0
      }
      return value
    }
  }
}
</script>

<style lang="scss">
.btn__operant, .btn__number, .btn__del {
    padding: 10px;
    margin: 10px 0 0 0;
}
.keyboard {
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 0;
}
.radio__button {
    margin: 10px 0 0 0;
}
</style>
