import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Privacy from './Privacy';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);
