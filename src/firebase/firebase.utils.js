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


firebase.initializeApp(config)

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

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc =>{
        const {title, items} =  doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator,collection)=> {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const getCurrentUser = () =>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe()
            resolve(userAuth)
        },reject)
    })
}
export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider)

export default firebase
