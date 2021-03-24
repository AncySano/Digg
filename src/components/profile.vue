<template>
  <div class="main">
    <h1>digg</h1>
    <img class="topcolor" src="../assets/Path 970.png" alt="topcolor" />
    <img class="bottomcolor" src="../assets/Path 971.png" alt="bottomcolor" />
    <div style="position: relative; width: 50%; height: 100%">
      <img
        style="width: 960px; height: 1080px"
        alt="background color"
        src="../assets/Path 969.png"
      />
      <img
        style="top: 26%; left: 17%; width: 480px; height: 446.8px"
        alt="white background"
        src="../assets/Path 968.png"
      />
      <img style="left: 17%; top: 26%" alt="man" src="../assets/man.png" />

      <p class="quotes">
        "Coming to Dubai with One Step Dubai has been the best decision of my
        life. I am now living in Dubai with good job and I will be getting
        married next year!"
      </p>
      <p class="studname">Mohammed, One Step Dubai Student Pakistan</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style scoped>
.main {
  margin: 0px;
  padding: 0px;
  position: relative;
}
h1 {
  color: #ffffff;
  margin: 66px 0px 0px 83px;
  position: absolute;
}
img {
  position: absolute;
  z-index: 1;
}
.topcolor {
  z-index: 2;
  /* margin: -14% 0 0 33%; */
  margin: -25% 0 0 70%;
  width: 337.76px;
  height: 420px;
  transform: rotate(-5deg);
}
.bottomcolor {
  z-index: 2;
  /* margin: 51% 0 0 25%; */
  margin: 103% 0 0 50%;
}
.quotes {
  font-size: 20px;
  font-weight: 300;
  width: 774px;
  /* width: 94%; */
  /* margin: 79% 0 0 8.6%; */
  position: absolute;
  z-index: 1;
  line-height: 41px;
  color: #ffffff;
  top: 67%;
  left: 17%;
}
.studname {
  /* margin: 95% 0 0 8.6%; */
  /* width: 44%; */
  width: 362px;
  font-size: 22px;
  font-weight: 600;
  position: absolute;
  z-index: 1;
  line-height: 41px;
  color: #ffffff;
  left: 17%;
  top: 81%;
}
</style>