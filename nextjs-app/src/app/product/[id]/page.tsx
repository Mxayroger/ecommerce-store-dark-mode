import { Product } from '@/types/database';
import ProductClient from '@/components/product/ProductClient';

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
export default async function ProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // جلب بيانات المنتج
  const product = dummyProduct;
  
  return <ProductClient product={product} id={params.id} />;
}
