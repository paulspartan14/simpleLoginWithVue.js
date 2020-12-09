<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Login</h1>
    <form @submit.prevent="login(user)">
      <input 
        type="email"
        placeholder="email"
        v-model="user.email"
        >
      <input 
        type="password" 
        placeholder="pass" 
        name="" 
        id="" 
        v-model="user.password"
        >
        <button type="submit">acceder</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src (imports)
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
  
}
</script>
