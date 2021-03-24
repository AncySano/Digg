<template>
  <div class="promain">
    <p>Progress</p>
    <div class="w3-border">
      <div class="progressbar" :style="'width:' + taskprogress + '%'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'progressbar',
  props: ["activeform"],
  computed: {
    taskprogress: function () {
      let res;
      if (this.activeform > 0) {
        // total no.of slides 8
        res = (this.activeform / 8) * 100;
      } else {
        res = 0;
      }
      return res;
    }
  }
};
</script>

<style scoped>
.promain {
  width: 1244px;
  margin-left: 23%;
}
p {
  font-size: 20px;
  font-weight: 400;
  color: #141212;
  margin:0px;
}
.w3-border {
  width: 100%;
  background-color: #ececec;
  border-radius: 500px;
  margin-top: 9px;
}
.progressbar {
  height: 18px;
  width: 10%;
  background: #4734e1;
  border-radius: 500px;
  /* transition: width 0.5s ease-in; */
}
</style>