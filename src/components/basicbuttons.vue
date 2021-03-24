<template>
  <div class="btnmain">
    <button @click="$emit('back')" class="back">Back</button>
    <button @click="$emit('next')" class="next">Next</button>
  </div>
</template>

<script>
export default {
  name:'basicbuttons'
};
</script>

<style scoped>
.btnmain {
  display: flex;
  margin-top: 30px;
}
button {
 padding: 21.5px 78px 21.5px 68px;
  border-radius: 500px;
  font-size: 22px;
  font-family: "Sora", sans-serif;
  font-weight: 300;
  border: none;
  outline: none;
}
.back {
  border: 1px solid #707070;
  color: #141212;
  margin-right: 34.2px;
  background-color: #FFFFFF;
}
.next {
  background-color: #4734e1;
  color: #ffffff;
}
</style>