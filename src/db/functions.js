import { auth } from './services'

export const loginFunction = () => {
  auth()
    .signInWithRedirect(new auth.GoogleAuthProvider())
    .then(() => {
      console.log('Success')
    })
    .catch(err => {
      console.log(err)
    })
}

export const logoutFunction = () => {
  auth().signOut().then(() => {
    console.log('Success')
  }).catch(err => {
    console.log(err)
  })
}