
import app from 'firebase/app'

import 'firebase/firebase-firestore'
import Dashboard from './Dashboard'
import { debounce } from '@material-ui/core'
import firebase from 'firebase'
require('firebase/auth')

const config = {
    apiKey: "AIzaSyBvMoYI1X6g1gX5bUzqqOOmMaYjvRmlskw",
    authDomain: "assignment-2e2ee.firebaseapp.com",
    databaseURL: "https://assignment-2e2ee.firebaseio.com",
    projectId: "assignment-2e2ee",
    storageBucket: "assignment-2e2ee.appspot.com",
    messagingSenderId: "897153109447",
    appId: "1:897153109447:web:1f452aa66144e6136f9de2",
    measurementId: "G-Y7DTHXFD0J"
  };

  

  class Firebase{
      constructor() {
          app.initializeApp(config)
          this.auth = app.auth()
          this.db = app.firestore()
      }

      login(email, password) {
          return this.auth.signInWithEmailAndPassword(email, password)
      }

      logout(){

        return this.auth.signOut()
      }

      async register(name,  email, password){
          await this.auth.createUserWithEmailAndPassword(email, password)
          return this.auth.currentUser.updateProfile({
             displayName: name

             
        })
  }

isInitialized() {
    return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
    })
}

getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
}

}
export default new Firebase()