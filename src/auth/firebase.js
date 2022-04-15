import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDIrHtIYDCLlUk7PC2_04-JkU-Dr0JUJX4',
  authDomain: 'netflix-clone-e6b9a.firebaseapp.com',
  projectId: 'netflix-clone-e6b9a',
  storageBucket: 'netflix-clone-e6b9a.appspot.com',
  messagingSenderId: '825388295337',
  appId: '1:825388295337:web:a3fffe115961adb964b5b8',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
