<template>
  <div class="home">
    <img src="..\safe-password-logo.png" alt="sp_logo">
    <div class="text">Press button to generate password.</div>
    <button class="btn" @click="generatePassword">GENERATE PASSWORD</button>
    <div class="text">My password is:</div>
    <div class="text" id="pswd">{{ password }}</div>
  </div>
</template>

<script>
import generatePasswordFromFile from '@/utilities/password';

export default {
  name: 'Home',
  data: () => ({
    password: null,
  }),
  methods: {
    generatePassword() {
      this.password = generatePasswordFromFile();
    },
  },
};
</script>
<style>
body {
  background-color: rgb(25, 25, 25);
}
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgb(26, 50, 95);
  border-radius: 8px;
  border: 0;
  height: 34.8vw;
  min-height: 430px;
  width: 23vw;
  min-width: 285px;
}
.btn {
  background: rgb(10, 10, 10);
  color: #fff;
  width: 65%;
  border-radius: 5px;
  padding: 0.7rem;
  border: none;
  margin-top: 7%;
  margin-bottom: 10%;
  font-family: Montserrat, sans-serif;
  font-size: calc(12px + 0.1vw);
  cursor: pointer;
}
.text {
  font-family: 'Work Sans', sans-serif;
  font-size: calc(13px + 0.11vw);
  padding: 0 5%;
  color: rgb(178, 184, 185);
  margin-left: 5px;
  cursor: default;
}
img {
  width: 60%;
  margin: 10% 0 20% 0;
}
#pswd {
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 120%;
  margin-top: 5%;
  margin-bottom: 2%;
  cursor: text;
}
</style>
