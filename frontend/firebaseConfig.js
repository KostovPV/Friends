// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3SQERW9UJzVK13Hp8zTfpC2c-rwNdvrc",
    authDomain: "friends-49039.firebaseapp.com",
    projectId: "friends-49039",
    storageBucket: "friends-49039.appspot.com",
    messagingSenderId: "39272086751",
    appId: "1:39272086751:web:b93d9bc98fd8bda64dfd6a",
    measurementId: "G-D0K049NB16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage
const storage = getStorage(app);

export { storage };
