import React, { useRef, useState } from 'react';

const SmartBot: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-600 mb-6">
        البوت الذكي لإدارة المتجر
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-center">
        <div className="bg-slate-50 p-4 rounded-lg">
          <i className="fas fa-robot text-3xl text-sky-500 mb-2"></i>
          <h3 className="font-semibold">نشر تلقائي</h3>
          <p className="text-sm text-slate-600">جدولة المنشورات لفيسبوك، إنستجرام وتيك توك.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <i className="fas fa-file-import text-3xl text-sky-500 mb-2"></i>
          <h3 className="font-semibold">استيراد سهل</h3>
          <p className="text-sm text-slate-600">استيراد المنتجات من ملفات Excel أو CSV.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <i className="fas fa-magic text-3xl text-sky-500 mb-2"></i>
          <h3 className="font-semibold">تحسين الصور</h3>
          <p className="text-sm text-slate-600">تحسين جودة صور المنتجات تلقائياً.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <i className="fas fa-bug text-3xl text-sky-500 mb-2"></i>
          <h3 className="font-semibold">فحص الأخطاء</h3>
          <p className="text-sm text-slate-600">فحص بيانات المنتج واقتراح التصحيحات.</p>
        </div>
      </div>

      <div 
        onClick={handleUploadClick} 
        className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-sky-500 hover:bg-slate-50 transition-colors"
      >
        <i className="fas fa-cloud-upload-alt text-5xl text-sky-500 mb-4"></i>
        <h3 className="font-semibold text-slate-800">انقر أو اسحب الملفات هنا لرفعها</h3>
        <p className="text-slate-600 text-sm">يدعم الصور، ملفات Excel، CSV</p>
        {fileName && <p className="text-green-600 text-sm mt-2">تم اختيار الملف: {fileName}</p>}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange}
          className="hidden" 
          accept=".xlsx,.csv,.jpg,.png"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          <i className="fab fa-facebook"></i>
          <span>ربط فيسبوك</span>
        </button>
        <button className="flex items-center gap-2 bg-pink-500 text-white py-2 px-5 rounded-full font-semibold hover:bg-pink-600 transition-colors">
          <i className="fab fa-instagram"></i>
          <span>ربط إنستجرام</span>
        </button>
        <button className="flex items-center gap-2 bg-black text-white py-2 px-5 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          <i className="fab fa-tiktok"></i>
          <span>ربط تيك توك</span>
        </button>
      </div>
    </div>
  );
};

export default SmartBot;
