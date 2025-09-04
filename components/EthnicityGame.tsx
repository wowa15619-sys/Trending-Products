import React, { useState, useRef } from 'react';
import { getStyleRecommendations } from '../services/geminiService';

const fileToGenerativePart = async (file: File): Promise<{ base64: string, mimeType: string }> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = (e.target?.result as string).split(',')[1];
      resolve({ base64, mimeType: file.type });
    };
    reader.readAsDataURL(file);
  });
};

const EthnicityGame: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    photoInputRef.current?.click();
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setResult(null);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyzeClick = async () => {
    if (!imageFile) {
      setError("الرجاء رفع صورة أولاً.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const { base64, mimeType } = await fileToGenerativePart(imageFile);
      const analysisResult = await getStyleRecommendations(base64, mimeType);
      setResult(analysisResult);
    } catch (err: any) {
      setError(err.message || "حدث خطأ غير متوقع.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-600 mb-2">منسق الأزياء الافتراضي</h2>
      <p className="text-slate-600 mb-6">لست متأكدًا ماذا تشتري؟ ارفع صورتك ودع الذكاء الاصطناعي يقدم لك توصيات مخصصة!</p>

      <div 
        onClick={handleUploadClick}
        className="border-2 border-dashed border-slate-300 rounded-lg p-8 cursor-pointer hover:border-sky-500 hover:bg-slate-50 transition-colors mb-4"
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-full" />
        ) : (
          <>
            <i className="fas fa-camera text-5xl text-sky-500 mb-4"></i>
            <h3 className="font-semibold text-slate-800">انقر لرفع صورتك</h3>
            <p className="text-slate-600 text-sm">الصيغ المدعومة: JPG, PNG</p>
          </>
        )}
        <input type="file" ref={photoInputRef} onChange={handlePhotoChange} className="hidden" accept="image/jpeg, image/png" />
      </div>

      {imageFile && (
        <button 
          onClick={handleAnalyzeClick} 
          disabled={isLoading}
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-sky-600 disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin me-2"></i>
              <span>جاري التحليل...</span>
            </>
          ) : 'احصل على توصيات'}
        </button>
      )}

      {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}
      
      {result && (
        <div className="mt-6 p-6 bg-slate-50 rounded-lg text-start">
          <h3 className="text-xl font-bold text-slate-800 mb-4">توصياتنا لك:</h3>
          <div className="whitespace-pre-wrap text-slate-700">{result}</div>
        </div>
      )}
    </div>
  );
};

export default EthnicityGame;
