import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">المتجر العالمي</h3>
            <p className="text-sm">متجرك الأول لكل ما تحتاجه من منتجات بأفضل الأسعار وجودة عالية.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">المنتجات</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">الدعم</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">سياسة الإرجاع</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">تتبع الشحنة</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">وسائل التواصل</h4>
            <div className="flex space-x-4 space-x-reverse text-2xl">
              <a href="#" className="hover:text-sky-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><i className="fab fa-snapchat"></i></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          <p>جميع الحقوق محفوظة &copy; المتجر العالمي {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
