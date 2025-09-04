import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsSearchFocused(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="text-3xl font-bold text-sky-600">المتجر العالمي</div>
          
          <div 
            className="flex-1 flex justify-center items-center my-2 sm:my-0 px-4"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={handleBlur}
          >
            <div className={`flex items-center transition-all duration-300 ease-in-out ${isSearchFocused ? 'w-full max-w-xl' : 'w-80'}`}>
                <div className="relative flex-grow">
                    <input 
                        type="text" 
                        placeholder="ابحث عن المنتجات..." 
                        className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-search text-gray-400"></i>
                    </div>
                </div>
                <button 
                    className={`flex-shrink-0 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-all duration-300 ease-in-out overflow-hidden ${isSearchFocused ? 'w-24 opacity-100 mr-2 py-2' : 'w-0 opacity-0 mr-0'}`}
                    aria-hidden={!isSearchFocused}
                    tabIndex={isSearchFocused ? 0 : -1}
                >
                    بحث
                </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <a href="#" className="text-gray-600 hover:text-sky-600 flex items-center gap-2">
              <i className="fas fa-user"></i>
              <span>حسابي</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-sky-600 flex items-center gap-2">
              <i className="fas fa-shopping-cart"></i>
              <span>السلة</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center">
            <li>
                <a href="#" className="block px-4 py-3 hover:bg-sky-600 transition-colors duration-200">
                  الرئيسية
                </a>
            </li>
            {CATEGORIES.slice(0, 6).map(category => (
              <li key={category.id}>
                <a href={`#category-${category.id}`} className="block px-4 py-3 hover:bg-sky-600 transition-colors duration-200">
                  {category.name}
                </a>
              </li>
            ))}
             <li>
                <a href="#" className="block px-4 py-3 hover:bg-sky-600 transition-colors duration-200">
                  عروض خاصة
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;