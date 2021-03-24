<template>
  <div class="main">
    <div class="heading">
      <h1>digg</h1>
      <progressbar :activeform="formno" />
    </div>
    <!-- form 1 -->
    <div class="formsec" style="margin: 77px 0 42px 0" v-if="formno === 1">
      <!-- question 1 -->
      <p class="question">Have you ever visited Dubai?</p>
      <div style="display: flex">
        <options
          v-for="(pill, index) in visited"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
      <!-- question 2 -->
      <p class="question">Do you have any friends or family in Dubai?</p>
      <div style="display: flex">
        <options
          v-for="(pill, index) in family"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
      <!-- question 3 -->
      <p class="question">How long do you want to stay in Dubai?</p>
      <div style="display: flex">
        <options
          v-for="(pill, index) in duration"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>

    <!-- form 2 (progress bar 1-1 )-->
    <div class="formsec" v-if="formno === 2">
      <!-- question 4 -->
      <p class="question" style="margin: 77px 0 42px 0">
        Why do you want to come to Dubai?
      </p>
      <div style="display: flex; flex-wrap: wrap">
        <options
          v-for="(pill, index) in reasonforvisit"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>
    <!-- form 3 (progress bar 1-2 )-->
    <div class="formsec" v-if="formno === 3">
      <!-- question 5 -->
      <p class="question" style="margin: 77px 0 42px 0">
        What industries would you prefer to work in?
      </p>
      <div style="display: flex; flex-wrap: wrap">
        <options
          v-for="(pill, index) in industries"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>
    <!-- form 4 (progress bar 1-3 )-->
    <div class="formsec" v-if="formno === 4">
      <!-- question 6 -->
      <p class="question" style="margin: 77px 0 42px 0">
        What are your interests?
      </p>
      <div style="display: flex; flex-wrap: wrap">
        <options
          v-for="(pill, index) in interests"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>
    <!-- form 5 (progress bar 1-4 )-->
    <div class="formsec" v-if="formno === 5">
      <!-- question 7 -->
      <p class="question" style="margin: 77px 0 42px 0">
        Do you have any financial savings?
      </p>
      <div style="display: flex; flex-wrap: wrap">
        <options
          v-for="(pill, index) in financial"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>
    <!-- form 6 (progress bar 1-5 )-->
    <div class="formsec" v-if="formno === 6">
      <!-- question 7 -->
      <p class="question" style="margin: 77px 0 42px 0">
        What is your level of education?
      </p>
      <div style="display: flex; flex-wrap: wrap">
        <options
          v-for="(pill, index) in edu_level"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>
    <!-- form 7 (progress bar 1-6 )-->
    <div class="formsec" v-if="formno === 7">
      <!-- question 7 -->
      <p class="question" style="margin: 77px 0 42px 0">
        How soon do you want to come to Dubai?
      </p>
      <div style="display: flex; flex-wrap: wrap">
        <options
          v-for="(pill, index) in availability"
          :key="pill.slno"
          :icon="pill.icon"
          :text="pill.text"
          :i="index"
        />
      </div>
    </div>
    <!-- emitted function on button click  -->
    <basicbuttons @back="previousPage()" @next="nextPage()" />
  </div>
</template>

<script>
import progressbar from "./progressbar.vue";
import basicbuttons from "./basicbuttons.vue";
import options from "./options.vue";

export default {
  name: "otherdigg",
  components: {
    progressbar,
    basicbuttons,
    options,
  },
  methods: {
    previousPage: function () {
      if (this.formno === 1) {
          console.log('lol')
          this.$router.push('mainpage')        
      }else{
          this.formno = this.formno - 1;
      }
    },
    nextPage: function () {
      if (this.formno < 7) {
        this.formno = this.formno + 1;
      }
    },
  },
  data() {
    return {
      formno: 1,
      visited: [
        { slno: "1.1", text: "No", icon: "no.svg" },
        { slno: "1.2", text: "Yes", icon: "yes.svg" },
      ],
      family: [
        { slno: "2.1", text: "No", icon: "no.svg" },
        { slno: "2.2", text: "Yes", icon: "yes.svg" },
      ],
      duration: [
        { slno: "3.1", text: "Upto 3 months", icon: "calander.svg" },
        { slno: "3.2", text: "3 to 6 months", icon: "calander.svg" },
        { slno: "3.3", text: "6 to 12 months", icon: "calander.svg" },
        { slno: "3.4", text: "+ 12 months", icon: "calander.svg" },
        { slno: "3.5", text: "+ 3 years", icon: "calander.svg" },
      ],
      reasonforvisit: [
        { slno: "4.1", text: "Lifestyle", icon: "lifestyle.svg" },
        { slno: "4.2", text: "Work opportunities", icon: "work.svg" },
        { slno: "4.3", text: "Education", icon: "education.svg" },
        { slno: "4.4", text: "Finance", icon: "finance.svg" },
        { slno: "4.5", text: "Tourism", icon: "tourism.svg" },
        { slno: "4.6", text: "Family", icon: "family.svg" },
        { slno: "4.7", text: "Business", icon: "business.svg" },
        { slno: "4.8", text: "Security", icon: "security.svg" },
        { slno: "4.9", text: "The weather", icon: "weather.svg" },
        { slno: "4.10", text: "Meeting new people", icon: "newpeople.svg" },
        { slno: "4.11", text: "Culture", icon: "culture.svg" },
      ],
      industries: [
        { slno: "5.1", text: "Construction", icon: "construction.svg" },
        { slno: "5.2", text: "Hospitality", icon: "hospitality.svg" },
        { slno: "5.3", text: "Real estate", icon: "realestate.svg" },
        { slno: "5.4", text: "Tourism", icon: "tourism2.svg" },
        { slno: "5.5", text: "Manufacturing", icon: "manufacturing.svg" },
        { slno: "5.6", text: "Technology", icon: "technology.svg" },
        { slno: "5.7", text: "Media", icon: "media.svg" },
        { slno: "5.8", text: "Farming", icon: "farming.svg" },
        { slno: "5.9", text: "Fishing", icon: "fishing.svg" },
        { slno: "5.10", text: "Education", icon: "education2.svg" },
        { slno: "5.11", text: "Public services", icon: "services.svg" },
        { slno: "5.12", text: "Administration", icon: "administration.svg" },
        { slno: "5.13", text: "Financial services", icon: "financial.svg" },
        { slno: "5.14", text: "Legal", icon: "legal.svg" },
        { slno: "5.15", text: "Health care", icon: "health.svg" },
        { slno: "5.16", text: "Government", icon: "gov.svg" },
        { slno: "5.17", text: "Medical", icon: "medical.svg" },
        { slno: "5.18", text: "Security", icon: "security.svg" },
        { slno: "5.19", text: "Logistics", icon: "logistics.svg" },
        { slno: "5.20", text: "Robotics", icon: "robotics.svg" },
        { slno: "5.21", text: "Fashion", icon: "fashion.svg" },
        { slno: "5.22", text: "Automotive", icon: "automotive.svg" },
        { slno: "5.23", text: "Transportation", icon: "transportation.svg" },
        { slno: "5.24", text: "Customer support", icon: "customer.svg" },
      ],
      interests: [
        { slno: "6.1", text: "Outdoors", icon: "outdoors.svg" },
        { slno: "6.2", text: "Fitness", icon: "fitness.svg" },
        { slno: "6.3", text: "Health", icon: "health.svg" },
        { slno: "6.4", text: "Travel", icon: "travel.svg" },
        { slno: "6.5", text: "Theme parks", icon: "parks.svg" },
        { slno: "6.6", text: "Cooking", icon: "cooking.svg" },
        { slno: "6.7", text: "Sports", icon: "sports.svg" },
        { slno: "6.8", text: "Adventure", icon: "adventure.svg" },
        { slno: "6.9", text: "Music", icon: "music.svg" },
        { slno: "6.10", text: "Fashion", icon: "fashion.svg" },
        { slno: "6.11", text: "Technology", icon: "technology2.svg" },
        { slno: "6.12", text: "Architecture", icon: "architecture.svg" },
        { slno: "6.13", text: "Writing", icon: "writing.svg" },
        { slno: "6.14", text: "Gaming", icon: "gaming.svg" },
        { slno: "6.15", text: "Dining", icon: "dining.svg" },
        { slno: "6.16", text: "History", icon: "history.svg" },
        { slno: "6.17", text: "Theatre", icon: "theatre.svg" },
        { slno: "6.18", text: "Networking", icon: "networking.svg" },
        { slno: "6.19", text: "Art", icon: "art.svg" },
        { slno: "6.20", text: "Politics", icon: "politics.svg" },
        { slno: "6.21", text: "Fishing", icon: "fishing.svg" },
        { slno: "6.22", text: "Meet people", icon: "newpeople.svg" },
        { slno: "6.23", text: "Podcasts", icon: "podcasts.svg" },
        { slno: "6.24", text: "Gambling", icon: "gambling.svg" },
        { slno: "6.25", text: "Self improvement", icon: "improvement.svg" },
        { slno: "6.26", text: "Foreign languages", icon: "foreign.svg" },
        { slno: "6.27", text: "Movies", icon: "movies.svg" },
        { slno: "6.28", text: "Celebrities", icon: "fashion.svg" },
        { slno: "6.29", text: "Dating", icon: "dating.svg" },
        { slno: "6.30", text: "Social media", icon: "socialmedia.svg" },
        { slno: "6.31", text: "Photography", icon: "photography.svg" },
      ],
      financial: [
        { slno: "7.1", text: "No savings", icon: "nosaving.svg" },
        { slno: "7.2", text: "0 to 1000 aed", icon: "0to1000.svg" },
        { slno: "7.3", text: "1000 to 5000 aed", icon: "1000to5000.svg" },
        { slno: "7.4", text: "5000 to 10,000 aed", icon: "5000to10000.svg" },
        { slno: "7.5", text: "10,000 to 20,000 aed", icon: "10000to20000.svg" },
        { slno: "7.6", text: "20,000 to 50,000 aed", icon: "outdoors.svg" },
        { slno: "7.7", text: "+50,000 aed", icon: "above50000.svg" },
      ],
      edu_level: [
        { slno: "8.1", text: "High school or less", icon: "level1.svg" },
        { slno: "8.2", text: "Collage", icon: "level2.svg" },
        { slno: "8.3", text: "Diploma", icon: "level3.svg" },
        { slno: "8.4", text: "Bachelors", icon: "level4.svg" },
      ],
      availability: [
        { slno: "9.1", text: "Right now", icon: "calander.svg" },
        { slno: "9.2", text: "0 to 3 months", icon: "calander.svg" },
        { slno: "9.3", text: "3 to 6 months", icon: "calander.svg" },
        { slno: "9.4", text: "6 to 12 months", icon: "calander.svg" },
        { slno: "9.5", text: "After 1 year", icon: "calander.svg" },
        { slno: "9.6", text: "I'm not sure", icon: "calander.svg" },
      ],
    };
  },
};
</script>
<style scoped >
.main {
  padding: 56px 71px 0 67px;
  margin: 0px;
}
.heading {
  display: flex;
}
h1 {
  color: #141212;
  margin: 0px;
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