<template>
  <div class="home">
    <img src="..\safe-password-logo.png" alt="sp_logo">
    <div class="text">Enter a length for your password.</div>
    <div class="input-container">
      <button class="input-btn minus"
      onclick="this.parentNode.querySelector('.input').stepDown()">
      <div class="symbol-minus">&#129171;</div></button>
      <button class="input-btn plus"
      onclick="this.parentNode.querySelector('.input').stepUp()">
      <div class="symbol-plus">&#129169;</div></button>
      <input class="input" min="6" value="6" id="pwL" type="number">
      <span class="tt-rules">Your password should be at least 6 characters long.</span>
      <span class="tt-error">Please enter a length greater than 6.</span>
    </div>
    <div class="text">Press button to generate password.</div>
    <button class="btn" @click="generatePassword">GENERATE PASSWORD</button>
    <div class="text">My password is:</div>
    <div class="text" id="pswd">
      <input class="input-pswd" type="text" id="input-pswd">
      <button class="copy" @click="copyToClipboard">
        <img src="..\copy_icon.png" alt="Copy"></button>
    </div>
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
      document.getElementById('input-pswd').value = this.password;
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.password);
    },
  },
};
</script>
