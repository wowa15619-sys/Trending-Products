import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="bg-cover bg-center text-white py-20 md:py-32" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d54?q=80&w=2070&auto=format&fit=crop')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          المتجر العالمي - اكتشف المنتجات الرابحة
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          أحدث المنتجات بأسعار تنافسية، خدمة توصيل سريعة، ودفع آمن.
        </p>
        <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300">
          تسوق الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;