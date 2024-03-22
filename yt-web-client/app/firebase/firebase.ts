// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMeVUiUp8wih6SHcGo24uKWg21ZtSpWiE',
  authDomain: 'yt-clone-ec3d7.firebaseapp.com',
  projectId: 'yt-clone-ec3d7',
  appId: '1:1859483135:web:a26b776e1d9308144423ca',
  measurementId: 'G-7DH04DGPPF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs the user in with Google
 * @returns a promise that resolves with the user
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out with Google
 * @returns a promise that resolves with the user
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Triggers a callback when the user's auth state changes
 * @returns a function to unsubscribe from the listener
 */
export function onAuthStateChangedHelper(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}
