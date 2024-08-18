import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from '@/pages/about';
import { Shop } from '@/pages/shop';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: (
          <Suspense fallback={'Loading...'}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'shop',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
