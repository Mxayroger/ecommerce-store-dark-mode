'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/app/components/product-card';
import { Product } from '@/types/database';

// بيانات المنتجات الوهمية للعرض
const dummyProducts: Product[] = [
  {
    id: 1,
    created_at: new Date().toISOString(),
    name: 'كريم البكيني والاندر ارم',
    description: 'كريم مخصص للعناية بمنطقة البكيني وتحت الذراعين، يساعد على تفتيح البشرة وترطيبها.',
    price: 70,
    image_url: '/images/product1.jpg',
    category: 'العناية بالبشرة',
    in_stock: true,
    featured: true
  },
  {
    id: 2,
    created_at: new Date().toISOString(),
    name: 'سنفرة البكيني والاندر ارم',
    description: 'سنفرة طبيعية لتقشير وتنعيم البشرة في منطقة البكيني وتحت الذراعين.',
    price: 40,
    image_url: '/images/product2.jpg',
    category: 'العناية بالبشرة',
    in_stock: true,
    featured: false
  },
  {
    id: 3,
    created_at: new Date().toISOString(),
    name: 'بوكس السعادة',
    description: 'مجموعة متكاملة من منتجات العناية بالبشرة تشمل الصابون والكريمات والسنفرة.',
    price: 250,
    image_url: '/images/product3.jpg',
    category: 'مجموعات',
    in_stock: true,
    featured: true
  },
  {
    id: 4,
    created_at: new Date().toISOString(),
    name: 'بوكس السعادة - إصدار محدود',
    description: 'إصدار محدود من بوكس السعادة يحتوي على منتجات إضافية حصرية.',
    price: 300,
    image_url: '/images/product4.jpg',
    category: 'مجموعات',
    in_stock: false,
    featured: false
  }
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // في المستقبل، سيتم استبدال هذا بجلب البيانات من Supabase
    setProducts(dummyProducts);
    
    // استخراج الفئات الفريدة من المنتجات
    const uniqueCategories = Array.from(new Set(dummyProducts.map(product => product.category)));
    setCategories(uniqueCategories);
  }, []);

  if (!mounted) {
    return null;
  }

  // تصفية المنتجات حسب الفئة والبحث
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">منتجاتنا</h1>
      
      {/* قسم البحث والتصفية */}
      <div className="mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              بحث
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث عن منتج..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="w-full md:w-64">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              الفئة
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="الكل">جميع الفئات</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* عرض المنتجات */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            لا توجد منتجات متطابقة مع معايير البحث.
          </p>
        </div>
      )}
    </div>
  );
}
