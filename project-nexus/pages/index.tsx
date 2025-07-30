import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { fetchProducts } from '@/features/products/productSlice';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/common/ProductGrid';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
