import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmejMiFDoqe04MhB_cKgGXDmx1tKC129E",
    authDomain: "crypto-web-37813.firebaseapp.com",
    projectId: "crypto-web-37813",
    storageBucket: "crypto-web-37813.appspot.com",
    messagingSenderId: "763121921080",
    appId: "1:763121921080:web:496c5796dbb7b06f5b4acd",
    measurementId: "G-9M1YP0E59M"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);