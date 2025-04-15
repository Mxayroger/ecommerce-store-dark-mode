import { Product } from '@/types/database';
import EditProductClient from '@/components/admin/EditProductClient';

// بيانات المنتج الوهمية للتعديل
const dummyProduct: Product = {
  id: 1,
  created_at: new Date().toISOString(),
  name: 'كريم البكيني والاندر ارم',
  description: 'كريم مخصص للعناية بمنطقة البكيني وتحت الذراعين، يساعد على تفتيح البشرة وترطيبها.',
  price: 70,
  image_url: '/images/product1.jpg',
  category: 'العناية بالبشرة',
  in_stock: true,
  featured: true
};

// مكون الصفحة الرئيسي (مكون خادم)
export default async function EditProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // جلب بيانات المنتج
  const product = dummyProduct;
  
  return <EditProductClient product={product} id={params.id} />;
}
