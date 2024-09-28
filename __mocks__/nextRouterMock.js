// __mocks__/next/router.js
jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn()
    })
  }));
  