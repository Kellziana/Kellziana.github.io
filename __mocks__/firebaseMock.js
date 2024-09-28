// __mocks__/firebase/firestore.js
import { mockFirestore } from 'firebase-mock';

const mockDatabase = new mockFirestore.MockFirestore();

export const firestore = () => {
  mockDatabase.autoFlush();
  return mockDatabase;
};

export const getFirestore = firestore;
