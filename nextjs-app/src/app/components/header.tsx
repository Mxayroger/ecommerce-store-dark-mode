'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ضمان التصيير على جانب العميل فقط
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* الشعار */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
              متجر إلكتروني
            </Link>
          </div>

          {/* القائمة للشاشات الكبيرة */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
              الرئيسية
            </Link>
            <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
              المنتجات
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
              من نحن
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
              اتصل بنا
            </Link>
          </nav>

          {/* أزرار الإجراءات */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* زر تبديل الوضع المظلم/الفاتح */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="تبديل الوضع المظلم/الفاتح"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* زر تسجيل الدخول */}
            <Link href="/admin" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* زر القائمة للشاشات الصغيرة */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="فتح القائمة"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للشاشات الصغيرة */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
                الرئيسية
              </Link>
              <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
                المنتجات
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
                من نحن
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
                اتصل بنا
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
