import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ResultsPage from '../app/results/page';
import '@testing-library/jest-dom';
import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }) => <img src={src} alt={alt} />
}));

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  }
});

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn()
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc: jest.fn(),
  setDoc: jest.fn(),
  addDoc: jest.fn(),
  collection: jest.fn()
}));

const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('ResultsPage Component', () => {
  const authMock = {
    currentUser: {
      uid: '123'
    }
  };
  const fakeCountries = '1. USA - Visit New York\n2. Canada - Explore Canada’s vast wilderness';

  beforeEach(() => {
    firebaseAuth.getAuth.mockImplementation(() => authMock);
    localStorage.setItem('suggestedCountries', fakeCountries);
    firebaseFirestore.addDoc.mockResolvedValue({ id: 'abc123' });
    firebaseFirestore.setDoc.mockResolvedValue();
  });

  test('loads suggested countries and displays them', async () => {
    render(<ResultsPage />);
    await waitFor(() => screen.getByText('Suggestion 1: USA'));
    expect(screen.getByText('Suggestion 1: USA')).toBeInTheDocument();
    expect(screen.getByText('Suggestion 2: Canada')).toBeInTheDocument();
  });

  test('submits thumbs up feedback', async () => {
    render(<ResultsPage />);
    await waitFor(() => screen.getAllByAltText('Thumbs Up')[0]);
    fireEvent.click(screen.getAllByAltText('Thumbs Up')[0]);
    await waitFor(() => screen.getByText('Thank you for your feedback!'));
    expect(screen.getByText('Thank you for your feedback!')).toBeInTheDocument();
  });
});
