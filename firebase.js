import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBbqa8dIUjTpNtYh8zx2EW-SrOoOIgO2GY',
    authDomain: 'tinder-expo-5ca8d.firebaseapp.com',
    projectId: 'tinder-expo-5ca8d',
    storageBucket: 'tinder-expo-5ca8d.appspot.com',
    messagingSenderId: '26037944718',
    appId: '1:26037944718:web:4fe3d6128ac585f335a4df'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }