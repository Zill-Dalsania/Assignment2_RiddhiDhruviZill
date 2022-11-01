import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCFkJ57Gcr2u1Dr5Yzn7PfJLjVWw3bdgSw',
  authDomain: 'looku-ecommerce.firebaseapp.com',
  databaseURL: 'https://looku-ecommerce.firebaseio.com',
  projectId: 'looku-ecommerce',
  storageBucket: 'looku-ecommerce.appspot.com',
  messagingSenderId: '490552140297',
  appId: '1:490552140297:web:c6d8f9ec6c58e3a6994ed8',
  measurementId: 'G-3H7Q41T2V2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
