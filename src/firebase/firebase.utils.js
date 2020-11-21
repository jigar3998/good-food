import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBuLkzF-XZC8JPUaspnHZo0XCghMRfZDVs",
    authDomain: "good-food-db.firebaseapp.com",
    databaseURL: "https://good-food-db.firebaseio.com",
    projectId: "good-food-db",
    storageBucket: "good-food-db.appspot.com",
    messagingSenderId: "669838789064",
    appId: "1:669838789064:web:e8aa2fb88bdacf823a18fd",
    measurementId: "G-4MSNE70ZRE"
};

export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user',error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)



export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase
