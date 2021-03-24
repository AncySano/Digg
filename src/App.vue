<template>
  <div id="app">   
    <router-view ></router-view> 
  </div>
</template>

<script>

export default {
  name: 'App' 
}
</script>

<style>
#app {
  font-family:"Sora", sans-serif;
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  width: 1906px;
  height: 1080px;
  border-style: dashed;
  margin: 0px;
  padding: 0px;
}
.question{
  font-size: 26px; 
  font-weight: 400;
  font-family: "Sora", sans-serif;
}
button{
  font-family:"Sora", sans-serif;
  border-radius: 500px;
  transform: scale(1);
    transition: all 0.15s ease-in;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0);
}
button:hover {
  transform: scale(1.03);
  transition: all 0.15s ease-in;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
h1 {
  font-size: 62px;
  font-family: "IBM Plex Sans", sans-serif;  
  z-index: 2;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {


 
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

 
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
 
  
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  

}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
 
  
}
</style>
