import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api, Api } from '@/state/api';

export const store = configureStore({
	reducer: { [api.reducerPath]: api.reducer },
	middleware: (getDefault) => getDefault().concat(api.middleware),
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
