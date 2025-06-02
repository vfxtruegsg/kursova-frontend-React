import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const UsersPage = lazy(() =>
  import('./page/AssortmentGoodsPage/AssortmentGoodsPage.jsx')
);
const OrdersPage = lazy(() => import('./page/OrdersPage/OrdersPage.jsx'));
const AccountPage = lazy(() => import('./page/AccountPage/AccountPage.jsx'));
const DetailGoodInformationPage = lazy(() =>
  import('./page/DetailGoodInformationPage/DetailGoodInformationPage.jsx')
);
const LoginPage = lazy(() => import('./page/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./page/RegisterPage/RegisterPage.jsx'));
const Loader = lazy(() => import('./components/Loader/Loader.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout />
      <main>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/goods/:id" element={<DetailGoodInformationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
