import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import GlobalStyle from './globalStyles';
import React from 'react';
import ReactDOM from 'react-dom/client';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

