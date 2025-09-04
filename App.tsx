import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProductCard from './components/ProductCard';
import SmartBot from './components/SmartBot';
import EthnicityGame from './components/EthnicityGame';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Notification from './components/Notification';
import CopyButton from './components/CopyButton';

// Constants
import { CATEGORIES, PRODUCTS, FEATURES } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [isPublished, setIsPublished] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const storeUrl = "https://global-store.com/my-shop";

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000); 
  };

  const handleAddToCart = (product: Product) => {
    showNotification(`تمت إضافة "${product.name}" إلى السلة!`);
  };

  const handleLinkCashApp = () => {
    showNotification("سيتم توجيهك قريباً لربط حسابك في كاش أب.");
  };

  return (
    <div className="bg-slate-50 text-slate-700 font-sans">
      <Header />
      {notification && <Notification message={notification} />}
      <main>
        <Hero />
        
        <Section title="الأقسام الرئيسية">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map(category => (
              <a href={`#category-${category.id}`} key={category.id} className="block relative rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-2">
                  <h3 className="text-white text-center text-xl font-bold">{category.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </Section>
        
        <section id="products-section" className="bg-slate-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              تصفح منتجاتنا
            </h2>
            <div className="space-y-16">
              {CATEGORIES.map(category => {
                const categoryProducts = PRODUCTS.filter(p => p.categoryId === category.id);
                if (categoryProducts.length === 0) return null;

                return (
                  <section id={`category-${category.id}`} key={category.id} className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-sky-500 inline-block">{category.name}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categoryProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <Section title="إدارة متجرك بالذكاء الاصطناعي">
          <SmartBot />
        </Section>

        <Section title="تحتاج إلى إلهام؟ جرب منسق الأزياء الذكي" className="py-12 bg-slate-100">
          <EthnicityGame />
        </Section>

        <section className="bg-slate-200">
          <Section title="لماذا تختار متجرنا؟" className="py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {FEATURES.map(feature => (
                <div key={feature.title} className="p-4">
                  <div className="text-sky-600 mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </section>

        <Section title="سحب الأرباح بسهولة">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">ربط متجرك بتطبيق كاش أب</h3>
            <p className="text-slate-600 mb-6">يمكنك الآن ربط متجرك الإلكتروني مع تطبيق كاش أب لسحب أرباحك بسهولة وأمان.</p>
            <button 
              onClick={handleLinkCashApp}
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              ربط الحساب الآن
            </button>
          </div>
        </Section>
        
        <section className="bg-slate-800 text-white">
            <Section title="نشر المتجر على الإنترنت" className="py-12" titleClassName="text-white">
                 <div className="text-center max-w-3xl mx-auto">
                    <p className="mb-6">انقر على الزر أدناه لنشر متجرك الإلكتروني على الإنترنت والحصول على رابط مباشر.</p>
                    <button 
                        onClick={() => setIsPublished(true)}
                        className="bg-emerald-500 font-bold text-lg py-3 px-10 rounded-full hover:bg-emerald-600 transition-colors"
                        disabled={isPublished}
                    >
                        <i className="fas fa-rocket me-2"></i>
                        {isPublished ? 'تم النشر بنجاح' : 'نشر المتجر الآن'}
                    </button>
                    {isPublished && (
                        <div className="mt-8 p-6 bg-slate-700 rounded-lg animate-fade-in-out">
                            <h3 className="text-xl font-bold mb-4">تهانينا! متجرك الآن مباشر.</h3>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-slate-900 p-3 rounded-md">
                               <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline break-all">{storeUrl}</a>
                               <CopyButton textToCopy={storeUrl} />
                            </div>
                        </div>
                    )}
                </div>
            </Section>
        </section>

      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
