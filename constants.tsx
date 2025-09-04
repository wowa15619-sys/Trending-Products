import React from 'react';
import { Category, Product, Feature } from './types';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'الأزياء الرجالية', image: 'https://picsum.photos/seed/men-fashion/400/300' },
  { id: 2, name: 'الأزياء النسائية', image: 'https://picsum.photos/seed/women-fashion/400/300' },
  { id: 3, name: 'الجوالات والأجهزة', image: 'https://picsum.photos/seed/mobiles/400/300' },
  { id: 4, name: 'الكمبيوتر وملحقاته', image: 'https://picsum.photos/seed/computing/400/300' },
  { id: 5, name: 'الأجهزة المنزلية', image: 'https://picsum.photos/seed/appliances/400/300' },
  { id: 6, name: 'الصحة والجمال', image: 'https://picsum.photos/seed/beauty/400/300' },
  { id: 7, name: 'مستلزمات الأطفال', image: 'https://picsum.photos/seed/kids-baby/400/300' },
  { id: 8, name: 'الرياضة واللياقة', image: 'https://picsum.photos/seed/sports-fitness/400/300' },
];

export const PRODUCTS: Product[] = [
  { id: 101, categoryId: 1, name: 'ساعة يد فاخرة للرجال', price: '750 ر.س', image: 'https://picsum.photos/seed/men-watch/400/400', rating: 4.8 },
  { id: 102, categoryId: 3, name: 'هاتف ذكي Pro 15', price: '4500 ر.س', image: 'https://picsum.photos/seed/smartphone-pro/400/400', rating: 4.9 },
  { id: 103, categoryId: 4, name: 'لابتوب للأعمال X1 Carbon', price: '6200 ر.س', image: 'https://picsum.photos/seed/laptop-business/400/400', rating: 4.7 },
  { id: 104, categoryId: 2, name: 'فستان سهرة أنيق', price: '450 ر.س', image: 'https://picsum.photos/seed/elegant-dress/400/400', rating: 4.6 },
  { id: 105, categoryId: 8, name: 'حذاء رياضي للجري', price: '320 ر.س', image: 'https://picsum.photos/seed/running-shoe/400/400', rating: 4.5 },
  { id: 106, categoryId: 5, name: 'ماكينة صنع القهوة', price: '280 ر.س', image: 'https://picsum.photos/seed/coffee-maker/400/400', rating: 4.8 },
  { id: 107, categoryId: 1, name: 'حقيبة ظهر للسفر', price: '180 ر.س', image: 'https://picsum.photos/seed/travel-backpack/400/400', rating: 4.4 },
  { id: 108, categoryId: 6, name: 'عطر نسائي جذاب', price: '350 ر.س', image: 'https://picsum.photos/seed/perfume-women/400/400', rating: 4.9 },
  { id: 109, categoryId: 3, name: 'كاميرا احترافية 4K', price: '2800 ر.س', image: 'https://picsum.photos/seed/pro-camera/400/400', rating: 4.7 },
  { id: 110, categoryId: 2, name: 'نظارة شمسية عصرية', price: '210 ر.س', image: 'https://picsum.photos/seed/cool-sunglasses/400/400', rating: 4.3 },
  { id: 111, categoryId: 4, name: 'سماعات لاسلكية بخاصية عزل الضوضاء', price: '550 ر.س', image: 'https://picsum.photos/seed/noise-cancelling-headphones/400/400', rating: 4.9 },
  { id: 112, categoryId: 5, name: 'مقلاة هوائية بدون زيت', price: '410 ر.س', image: 'https://picsum.photos/seed/air-fryer/400/400', rating: 4.6 },
  { id: 113, categoryId: 7, name: 'لعبة تركيب للأطفال', price: '120 ر.س', image: 'https://picsum.photos/seed/kids-blocks/400/400', rating: 4.5 },
  { id: 114, categoryId: 1, name: 'قميص رجالي كلاسيكي', price: '150 ر.س', image: 'https://picsum.photos/seed/men-shirt/400/400', rating: 4.4 },
  { id: 115, categoryId: 4, name: 'شاشة ألعاب منحنية', price: '1500 ر.س', image: 'https://picsum.photos/seed/gaming-monitor/400/400', rating: 4.8 },
  { id: 116, categoryId: 6, name: 'مجموعة العناية بالبشرة', price: '250 ر.س', image: 'https://picsum.photos/seed/skincare-set/400/400', rating: 4.7 }
];


export const FEATURES: Feature[] = [
    {
        icon: <i className="fas fa-shipping-fast text-4xl"></i>,
        title: 'شحن سريع',
        description: 'شحن سريع وآمن لجميع أنحاء العالم'
    },
    {
        icon: <i className="fas fa-undo text-4xl"></i>,
        title: 'إرجاع سهل',
        description: 'إمكانية إرجاع المنتج خلال 14 يوم'
    },
    {
        icon: <i className="fas fa-lock text-4xl"></i>,
        title: 'دفع آمن',
        description: 'أنظمة دفع متعددة وآمنة'
    },
    {
        icon: <i className="fas fa-headset text-4xl"></i>,
        title: 'دعم فني',
        description: 'دعم فني متاح على مدار الساعة'
    }
];