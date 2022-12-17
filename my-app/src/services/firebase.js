import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCh93wNPBpM0oQcKr5w0kJw4xnOqNI0BLU",
  authDomain: "gb-263811.firebaseapp.com",
  projectId: "gb-263811",
  storageBucket: "gb-263811.appspot.com",
  messagingSenderId: "506726017239",
  appId: "1:506726017239:web:260abae7bc4be6f859a892"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password)
}

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(firebaseAuth, email, password)
}

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const postsRef = ref(db, 'posts')
export const getPostById = (postId) => ref(db, `posts/${postId}`)