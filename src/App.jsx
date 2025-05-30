import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const UsersPage = lazy(() =>
  import('./page/AssortmentGoodsPage/AssortmentGoodsPage.jsx')
);
const OrdersPage = lazy(() => import('./page/OrdersPage/OrdersPage.jsx'));
const GoodsPage = lazy(() => import('./page/GoodsPage/GoodsPage.jsx'));
const DetailGoodInformationPage = lazy(() =>
  import('./page/DetailGoodInformationPage/DetailGoodInformationPage.jsx')
);
const Loader = lazy(() => import('./components/Loader/Loader.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout />
      <main>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/goods" element={<GoodsPage />} />
          <Route path="/goods/:id" element={<DetailGoodInformationPage />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
