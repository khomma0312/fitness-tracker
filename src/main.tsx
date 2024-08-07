import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { worker } from './mock/api/browser.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const brandColor: MantineColorsTuple = [
  '#e0feff',
  '#cdf8ff',
  '#9eeffc',
  '#6de5fa',
  '#47ddf7',
  '#32d8f7',
  '#20d6f7',
  '#06bddd',
  '#00a9c6',
  '#0093ae',
];

const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    'brand-blue': brandColor,
  },
  fontFamily: 'sans-serif',
});

const client = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
