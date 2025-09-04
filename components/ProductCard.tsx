import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    let stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fas fa-star text-amber-400"></i>);
    }
    if (hasHalfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt text-amber-400"></i>);
    }
    const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star text-amber-400"></i>);
    }

    return (
      <div className="flex items-center gap-1" role="img" aria-label={`التقييم: ${rating} من 5 نجوم`}>
        {stars}
      </div>
    );
};


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-2 truncate">{product.name}</h3>
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-sky-600">{product.price}</p>
          <RatingStars rating={product.rating} />
        </div>
        <button 
          className="w-full bg-slate-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300"
          onClick={() => onAddToCart(product)}
        >
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;