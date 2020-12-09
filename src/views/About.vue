<template>
  <div class="about">
    <h1>protected route</h1>
    {{token}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['token','server'])
  },
  methods: {
    async protectedDates(){
      try {
        const res = await fetch('https://api-lawnor4720.herokuapp.com/api/v1/admin/', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.token
          }
        })
        const resDB = await res.json()
        //console.log(resDB)
      } catch (err){
        console.error(err)
      }
    }
  },
  created(){
    this.protectedDates()
  }

}
</script>