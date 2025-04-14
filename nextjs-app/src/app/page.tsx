export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* قسم الترحيب */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-600 dark:to-green-800 rounded-lg shadow-xl p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">مرحباً بك في متجرنا الإلكتروني</h1>
          <p className="text-lg mb-6">اكتشف منتجاتنا المميزة بتصميم عصري وجودة عالية</p>
          <a 
            href="/products" 
            className="inline-block bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            تصفح المنتجات
          </a>
        </div>
      </section>

      {/* قسم المنتجات المميزة */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">المنتجات المميزة</h2>
          <a href="/products" className="text-green-600 dark:text-green-400 hover:underline">عرض الكل</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* سيتم استبدال هذا بمكونات المنتج الفعلية عند ربط قاعدة البيانات */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">اسم المنتج</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">وصف المنتج المختصر هنا...</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">١٥٠ ريال</span>
                <a 
                  href="https://wa.me/?text=اريد%20طلب%20هذا%20المنتج" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
                >
                  طلب عبر الواتساب
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">اسم المنتج</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">وصف المنتج المختصر هنا...</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">٢٠٠ ريال</span>
                <a 
                  href="https://wa.me/?text=اريد%20طلب%20هذا%20المنتج" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
                >
                  طلب عبر الواتساب
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">اسم المنتج</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">وصف المنتج المختصر هنا...</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">١٧٥ ريال</span>
                <a 
                  href="https://wa.me/?text=اريد%20طلب%20هذا%20المنتج" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
                >
                  طلب عبر الواتساب
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">اسم المنتج</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">وصف المنتج المختصر هنا...</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">١٢٥ ريال</span>
                <a 
                  href="https://wa.me/?text=اريد%20طلب%20هذا%20المنتج" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
                >
                  طلب عبر الواتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الفئات */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">تسوق حسب الفئة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/products?category=category1" className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
            <span className="text-lg font-medium text-green-800 dark:text-green-200">الفئة الأولى</span>
          </a>
          <a href="/products?category=category2" className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
            <span className="text-lg font-medium text-green-800 dark:text-green-200">الفئة الثانية</span>
          </a>
          <a href="/products?category=category3" className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
            <span className="text-lg font-medium text-green-800 dark:text-green-200">الفئة الثالثة</span>
          </a>
          <a href="/products?category=category4" className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
            <span className="text-lg font-medium text-green-800 dark:text-green-200">الفئة الرابعة</span>
          </a>
        </div>
      </section>

      {/* قسم المميزات */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">لماذا تختارنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">جودة عالية</h3>
            <p className="text-gray-600 dark:text-gray-300">نقدم منتجات ذات جودة عالية تلبي احتياجاتك وتتجاوز توقعاتك.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">أسعار منافسة</h3>
            <p className="text-gray-600 dark:text-gray-300">نوفر أسعارًا منافسة تناسب جميع الميزانيات دون المساس بالجودة.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">دعم سريع</h3>
            <p className="text-gray-600 dark:text-gray-300">فريق دعم متميز جاهز للإجابة على استفساراتك وتقديم المساعدة في أي وقت.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
