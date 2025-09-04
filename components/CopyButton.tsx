import React, { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex-shrink-0 flex items-center justify-center gap-2 text-sm font-semibold py-2 px-4 rounded-md transition-colors duration-200 ${
        isCopied
          ? 'bg-green-500 text-white'
          : 'bg-sky-500 text-white hover:bg-sky-600'
      }`}
      disabled={isCopied}
    >
      {isCopied ? (
        <>
          <i className="fas fa-check"></i>
          <span>تم النسخ!</span>
        </>
      ) : (
        <>
          <i className="fas fa-copy"></i>
          <span>نسخ الرابط</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
