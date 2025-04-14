-- إنشاء جدول المنتجات
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  category TEXT,
  in_stock BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE
);

-- إنشاء جدول المسؤولين
CREATE TABLE admins (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- إنشاء جدول الفئات
CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  description TEXT
);

-- إدخال بيانات المسؤول الافتراضي
INSERT INTO admins (email, password) 
VALUES ('gohi@i.com', 'gohi880');

-- إنشاء سياسات الأمان للجداول
-- سياسة المنتجات: القراءة للجميع، التعديل للمسؤولين فقط
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "المنتجات متاحة للقراءة للجميع" ON products FOR SELECT USING (true);
CREATE POLICY "المنتجات متاحة للتعديل للمسؤولين فقط" ON products FOR INSERT USING (auth.role() = 'authenticated');
CREATE POLICY "المنتجات متاحة للتحديث للمسؤولين فقط" ON products FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "المنتجات متاحة للحذف للمسؤولين فقط" ON products FOR DELETE USING (auth.role() = 'authenticated');

-- سياسة الفئات: القراءة للجميع، التعديل للمسؤولين فقط
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "الفئات متاحة للقراءة للجميع" ON categories FOR SELECT USING (true);
CREATE POLICY "الفئات متاحة للتعديل للمسؤولين فقط" ON categories FOR INSERT USING (auth.role() = 'authenticated');
CREATE POLICY "الفئات متاحة للتحديث للمسؤولين فقط" ON categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "الفئات متاحة للحذف للمسؤولين فقط" ON categories FOR DELETE USING (auth.role() = 'authenticated');

-- سياسة المسؤولين: التعديل للمسؤولين فقط
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
CREATE POLICY "المسؤولين متاحين للتعديل للمسؤولين فقط" ON admins FOR ALL USING (auth.role() = 'authenticated');
