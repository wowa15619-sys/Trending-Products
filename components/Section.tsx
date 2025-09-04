import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = 'py-12', titleClassName = '' }) => {
  return (
    <section className={`container mx-auto px-4 ${className}`}>
      <h2 className={`text-3xl font-bold text-center text-slate-800 mb-8 ${titleClassName}`}>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
