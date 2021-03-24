<template>
  <div class="main">
    <!-- <h1 v-bind:class="{ highlight_move: sel.moving }">digg</h1> -->
  <profile/>
  <applyform/>
  </div>
</template>

<script>

import profile from './profile.vue';
import applyform from './applyform.vue';
export default {
  name: "mainpage",
  components:{
profile,
applyform
  },
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  position: absolute;
  z-index: 1;
}
p {
  font-family: "Sora", sans-serif;
}



ul {
  display: flex;
  list-style: none;
      margin: 20px 0 0 0;
}
li:not(:last-child) {
    margin-right: 21px;
}
input{
  padding: 23px 0 25px 19px;
  width: 380px;
  height: 20px;
  background-color:#EFEFEF;
  outline-color:#4B33E1; 
  border: none;
}

select{
  padding: 23px 0 25px 19px;
    width: 403px;
    height: 72px;
    background-color:#EFEFEF;
  outline-color:#4B33E1; 
  border: none;
}
*:focus {
    
    outline-style: solid;
     outline-width: 1px;
}
button{
   font-size: 22px;
  font-family:"Sora", sans-serif;
  font-weight: 300;
  background-color: #4734E1;
  padding: 21px 94px 24px 77px;
  outline: none;
  border: 1px solid #707070;
  color: #FFFFFF;
  border-radius: 500px;
  /* check */
  position: absolute;
  margin: 4% 0 0 59%;
}
</style>
