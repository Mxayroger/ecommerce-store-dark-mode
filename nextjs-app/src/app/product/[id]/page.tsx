import { Product } from '@/types/database';

// بيانات المنتج الوهمية للعرض
const dummyProduct: Product = {
  id: 1,
  created_at: new Date().toISOString(),
  name: 'كريم البكيني والاندر ارم',
  description: 'كريم مخصص للعناية بمنطقة البكيني وتحت الذراعين، يساعد على تفتيح البشرة وترطيبها. يحتوي على مكونات طبيعية تساعد على تفتيح البشرة وترطيبها وتنعيمها. مناسب للاستخدام اليومي ويعطي نتائج مرضية خلال فترة قصيرة من الاستخدام المنتظم.',
  price: 70,
  image_url: '/images/product1.jpg',
  category: 'العناية بالبشرة',
  in_stock: true,
  featured: true
};

// مكون الصفحة الرئيسي (مكون خادم)
export default async function ProductPage({ params }) {
  // جلب بيانات المنتج
  const product = dummyProduct;
  
  return <ProductClient product={product} id={params.id} />;
}

// المكون العميل للمنتج
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '@/components/whatsapp-button';

function ProductClient({ product, id }) {
  const [quantity, setQuantity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="w-full md:w-1/2">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // تنسيق السعر بالريال السعودي
  const formattedPrice = new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
              الرئيسية
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                المنتجات
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="text-gray-500 dark:text-gray-400">{product.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* صورة المنتج */}
        <div className="w-full md:w-1/2">
          <div className="relative h-96 w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">{formattedPrice}</span>
            {!product.in_stock && (
              <span className="mr-4 bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                نفذت الكمية
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">الفئة</h3>
            <Link href={`/products?category=${product.category}`} className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
              {product.category}
            </Link>
          </div>

          {/* اختيار الكمية */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">الكمية</h3>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-l-md"
                disabled={!product.in_stock}
              >
                -
              </button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 px-3 py-1 text-center border-y border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                disabled={!product.in_stock}
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-r-md"
                disabled={!product.in_stock}
              >
                +
              </button>
            </div>
          </div>

          {/* زر الطلب عبر الواتساب */}
          <WhatsAppButton 
            productName={product.name}
            productUrl={window.location.href}
            inStock={product.in_stock}
            className="w-full md:w-auto px-6 py-3 rounded-md font-medium flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}
