import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() =>
    initializeApp({
      apiKey: "AIzaSyDiozWDSHtoLKkujLziZjXYS7JES42Yhks",
      authDomain: "webkert-szeged-menetrend.firebaseapp.com",
      projectId: "webkert-szeged-menetrend",
      storageBucket: "webkert-szeged-menetrend.firebasestorage.app",
      messagingSenderId: "103486548219",
      appId: "1:103486548219:web:8dc14a709d299df3db285e"
    })),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  ]
};
/*// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDiozWDSHtoLKkujLziZjXYS7JES42Yhks",
  authDomain: "webkert-szeged-menetrend.firebaseapp.com",
  projectId: "webkert-szeged-menetrend",
  storageBucket: "webkert-szeged-menetrend.firebasestorage.app",
  messagingSenderId: "103486548219",
  appId: "1:103486548219:web:8dc14a709d299df3db285e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/