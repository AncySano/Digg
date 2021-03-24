<template>
  <div class="option">
    <img :src="require(`@/assets/${icon}`)" alt="icon" />
    <button @click="selectOption()" v-bind:class="{selected:select===true,nonselected:select===false}" >{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "options",
  props: ["icon", "text", "i"],
 data() {
    return {
select:false
    };
  },
  methods:{
    selectOption:function(){
      this.select = !this.select;
    }
  }

};
</script>

<style  scoped>
.option {
  position: relative;
  margin-bottom: 30px;
}
img {
  position: absolute;
  z-index: 1;
  /* margin: 24px 23px 23px 43px; */
  width: 19px;
    height: 19px;
    top: 26px;
    left:48px;
    bottom: 24px;
}
button {
  font-size: 18px;
  font-weight: 400;
  /* margin: 0 41px 0 0; */
  margin: 0 30px 0 0;
  padding: 22px 52px 23px 78px;
  border-radius: 500px;
  background-color: #efefef;
  outline: none;
  border: none;
  min-width: 140px;
  /* width: 140px; */
  height: 69px;
  color: #141212;
}
.selected{
 background-color: #4734E1;
}
.notselected{
  background-color: #efefef;
}
</style>