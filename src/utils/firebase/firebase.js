import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDYdneBpqpT4Y2O6hemZ9qf6kvcFaF5SF4',
  authDomain: 'lnacloseout.firebaseapp.com',
  projectId: 'lnacloseout',
  storageBucket: 'lnacloseout.appspot.com',
  messagingSenderId: '114623417771',
  appId: '1:114623417771:web:3e1f5d7196ecd7dde2d6ee',
};

initializeApp(firebaseConfig);
const db = getFirestore();

const addUser = async (contact) => {
  console.log(db);
  const userDocRef = doc(db, 'contacts', contact.id);
  try {
    await setDoc(userDocRef, contact);
  } catch (err) {
    console.log('EROR');
  }
};

const addVisiter = async (visiter) => {
  console.log(db);
  const visiterDocRef = doc(db, 'visiters', visiter.id);
  try {
    await setDoc(visiterDocRef, visiter);
  } catch (err) {
    console.log('EROR');
  }
};

export { addUser, addVisiter };
