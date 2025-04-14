export interface Product {
  id: number;
  created_at: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  in_stock: boolean;
  featured: boolean;
}

export interface Admin {
  id: number;
  created_at: string;
  email: string;
  password: string; // هذا للتوضيح فقط، كلمات المرور يجب أن تكون مشفرة في قاعدة البيانات
}

export interface Category {
  id: number;
  created_at: string;
  name: string;
  description: string;
}

export interface Database {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Omit<Product, 'id' | 'created_at'>;
        Update: Partial<Omit<Product, 'id' | 'created_at'>>;
      };
      admins: {
        Row: Admin;
        Insert: Omit<Admin, 'id' | 'created_at'>;
        Update: Partial<Omit<Admin, 'id' | 'created_at'>>;
      };
      categories: {
        Row: Category;
        Insert: Omit<Category, 'id' | 'created_at'>;
        Update: Partial<Omit<Category, 'id' | 'created_at'>>;
      };
    };
  };
}
