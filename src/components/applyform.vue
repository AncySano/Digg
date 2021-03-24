<template>
  <div class="formsec">
    <p style="margin: 0 0 34px 0; text-align: center; font-size: 46px">
      Apply now to work in Dubai
    </p>
    <ul>
      <li>
        <input
          @click="required = false"
          v-bind:class="{
            mandatory: required.firstname === true,
            notmandatory: required.firstname === false,
          }"
          v-model="firstname"
          placeholder="First name"
        />
      </li>
      <li>
        <input
          @click="required = false"
          v-bind:class="{
            mandatory: required.lastname === true,
            notmandatory: required.lastname === false,
          }"
          v-model="lastname"
          placeholder="Last name"
        />
      </li>
    </ul>
    <ul>
      <li>
        <input
          @click="required = false"
          v-bind:class="{
            mandatory: required.dateofbirth === true,
            notmandatory: required.dateofbirth === false,
          }"
          type="date"
          v-model="dateofbirth"
        />
      </li>

      <li style="width: 100%">
        Gender
        <div>
          <!-- <div v-for="(format,index) in gender.list"
          :key="index">
          <input
            style="width: 20%;outline: none;"
            type="checkbox"
            :id="gender.list"
            :v-model="gender.active"
            :value="gender.list"
          />
          <label :for="male">Male</label> -->
          <input
            style="width: 20%; outline: none"
            type="checkbox"
            id="male"
            v-model="gender"
            value="male"
          />
          <label for="male">Male</label>
          <input
            style="width: 20%; outline: none"
            type="checkbox"
            id="female"
            v-model="gender"
            value="Female"
          />
          <label for="female">Female</label>
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <select
          @click="required = false"
          v-model="nationality"
          v-bind:class="{
            mandatory: required.nationality === true,
            notmandatory: required.nationality === false,
          }"
        >
          <option disabled value="">Nationality</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </li>
      <li>
        <select
          @click="required = false"
          v-model="country"
          v-bind:class="{
            mandatory: required.country === true,
            notmandatory: required.country === false,
          }"
        >
          <option disabled value="">Country of residence</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </li>
    </ul>
    <p class="question" style="margin: 17px 0 0 40px; text-align: left">
      How we can contact you ?
    </p>
    <ul>
      <li>
        <input
          @click="required = false"
          v-bind:class="{
            mandatory: required.contact === true,
            notmandatory: required.contact === false,
          }"
          v-model="contact"
          placeholder="Contact number"
        />
      </li>
      <li>
        <input
          @click="required = false"
          v-bind:class="{
            mandatory: required.email === true,
            notmandatory: required.email === false,
          }"
          v-model="email"
          placeholder="Email address"
        />
      </li>
    </ul>

    <button @click="applyNow()">Apply Now</button>
  </div>
</template>

<script>
export default {
  name: "applyform",
  data() {
    return {
      firstname: null,
      lastname: null,
      dateofbirth: null,
      nationality: null,
      country: null,
      contact: null,
      email: null,
      gender: null,
      required: {
        firstname: false,
        lastname: false,
        dateofbirth: false,
        nationality: false,
        country: false,
        contact: false,
        email: false,
      },
    };
  },
  methods: {
    applyNow: function () {
      let formValid = this.checkForm();
      if (formValid) {
        this.$router.push("otherdigg");
      }
    },
    checkForm: function () {
      let validform = false;
      if (!this.firstname) {
        this.required.firstname = true;
      } 
      // else if (!this.lastname) {
      //   this.required.lastname = true;
      // } else if (!this.dateofbirth) {
      //   this.required.dateofbirth = true;
      // } else if (!this.nationality) {
      //   this.required.nationality = true;
      // } else if (!this.country) {
      //   this.required.country = true;
      // } else if (!this.contact) {
      //   this.required.contact = true;
      // } else if (!this.email) {
      //   this.required.email = true;
      // } 
      else {
        validform = true;
      }
      return validform;
    },
  },
};
</script>

<style scoped>
.formsec {
  padding: 11.5% 3.5% 0 3.5%;
  position: relative;
  width: 43%;
}
ul {
  display: flex;
  list-style: none;
  margin: 20px 0 0 0;
}
li:not(:last-child) {
  margin-right: 21px;
}
input {
  padding: 23px 0 25px 19px;
  width: 380px;
  height: 20px;
  background-color: #efefef;
  outline-color: #4b33e1;
  border: none;
}

select {
  padding: 23px 0 25px 19px;
  width: 403px;
  height: 72px;
  background-color: #efefef;
  outline-color: #4b33e1;
  border: none;
}
*:focus {
  outline-style: solid;
  outline-width: 1px;
}
button {
  font-size: 22px;
  font-weight: 300;
  background-color: #4734e1;
  padding: 21px 94px 24px 77px;
  outline: none;
  border: 1px solid #707070;
  color: #ffffff;

  /* check */
  position: absolute;
  margin: 4% 0 0 59%;
}
.mandatory {
  outline: 1px solid red;
}
.notmandatory {
  outline: none;
}
</style>