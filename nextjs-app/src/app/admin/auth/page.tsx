'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function SupabaseAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // في الإصدار النهائي، سنستخدم مصادقة Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // تخزين حالة تسجيل الدخول في localStorage
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/admin/dashboard');
      }
    } catch (error: any) {
      // للتطوير، نسمح بتسجيل الدخول باستخدام البيانات المحددة مسبقًا
      if (email === 'gohi@i.com' && password === 'gohi880') {
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/admin/dashboard');
        return;
      }
      
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      console.error('خطأ في تسجيل الدخول:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            تسجيل الدخول للوحة الإدارة
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            استخدم البريد الإلكتروني وكلمة المرور المحددة للوصول إلى لوحة الإدارة
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                البريد الإلكتروني
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 focus:z-10 sm:text-sm"
                placeholder="البريد الإلكتروني"
                dir="ltr"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                كلمة المرور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 focus:z-10 sm:text-sm"
                placeholder="كلمة المرور"
                dir="ltr"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400 disabled:cursor-not-allowed"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </div>
          
          <div className="text-sm text-center">
            <p className="text-gray-600 dark:text-gray-400">
              للتطوير: استخدم البريد الإلكتروني <span className="font-semibold">gohi@i.com</span> وكلمة المرور <span className="font-semibold">gohi880</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
