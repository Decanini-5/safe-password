<template>
  <div class="home">
    <h1>Safe Password</h1>
    <div>Press button to generate password.</div>
    <button @click="generatePassword">Generate Password</button>
    <div>My password is: {{ password }}</div>
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
