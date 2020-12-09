import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({commit}, user){
      console.log(user)
      try {
        const res = await 
        //falta asignar a la ruta una variable global que seria la ruta del server
          fetch('https://api-lawnor4720.herokuapp.com/api/v1/user/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/Json'
          },
          body: JSON.stringify(user)
        })
        // aqui se guarda la respuesta del servidor
        const responseDB = await res.json()
        //console.log(responseDB.data.token)
        // luego se comitea la mutacion y el token se debe almacenar
        // en token, y por eso se modifica 'setToken'
        commit('setToken', responseDB.data.token)

        // ahora el token se almacena en localStorage para que aunque
        // se refresque la pagina, este ahi el token
        localStorage.setItem('token', responseDB.data.token)

      } catch (err){
        console.error(err)
      }
    },

    // accion para que el token sea el que esta en localStorage
    readToken({ commit }){
      if (localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    logout ({ commit }){
      localStorage.removeItem('token')
      commit('setToken', null)
    }
  },
  modules: {
  }
})
