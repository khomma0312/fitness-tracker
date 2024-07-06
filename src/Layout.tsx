import { Outlet } from 'react-router-dom';
import { Header } from '@/layouts/Header';
import { Sidebar } from './layouts/Sidebar';
import { WhenVisible } from './components/WhenVisible';
import { HandleServerError } from './components/HandleServerError';
import { Suspense } from 'react';
import { Loader } from './components/Loader';

export const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <WhenVisible lg xl>
        <Sidebar />
      </WhenVisible>
      <HandleServerError>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </HandleServerError>
    </div>
  );
};
