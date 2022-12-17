import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyB_mQnR5dc4vKD454FSNPJBx_H3tu3qTuY",
  authDomain: "gb-266454.firebaseapp.com",
  projectId: "gb-266454",
  storageBucket: "gb-266454.appspot.com",
  messagingSenderId: "985294077444",
  appId: "1:985294077444:web:b4a8e9b0538e37e2133f51"
};

const app = initializeApp(firebaseConfig);

export const firbaseAuth = getAuth(app)

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(firbaseAuth, email, password)
}

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(firbaseAuth, email, password)
}

export const logOut = async () => await signOut(firbaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const postsRef = ref(db, 'posts')
export const getPostById = (postID) => ref(db, `posts/${postID}`)