import { firebaseAuth, firebaseDb } from "boot/firebase";

const state = {
  userDetails: {}
}

const mutations = {
  setUserDetails(state, payload) {
    state.userDetails = payload;
  }
}

const actions = {
  registerUser({}, payload) {
    console.log(payload)
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        let userId = firebaseAuth.currentUser.uid;
        firebaseDb.ref('users/' + userId).set({
          email: payload.email,
          online: true
        })
      })
      .catch(error => {
        console.log(error.message)
      });
  },

  // Login user

  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(r =>
      setTimeout( func => {
        this.$router.push('/')
      }, 1000)
    );
  },

  // Logout user

  async logoutUser() {
    await firebaseAuth.signOut();
    console.log('User disconnected')
  },

  handleAuthStateChanged({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        let userId = firebaseAuth.currentUser.uid;
        firebaseDb.ref('users/' + userId).once('value', snapshot => {
          let userDetails = snapshot.val();
          commit('setUserDetails', {
            userId: userId,
            email: userDetails.email
          })
        })

        // Update online status user
        dispatch('firebaseUpdateUser', {
          userId: userId,
          updates: {
            online: true
          }
        })
      } else {
        // Update online status user
        dispatch('firebaseUpdateUser', {
          userId: state.userDetails.userId,
          updates: {
            online: false
          }
        })
        commit('setUserDetails', {})
      }
    });
  },

  firebaseUpdateUser({}, payload) {
    firebaseDb.ref('users/' + payload.userId).update(payload.updates)
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
