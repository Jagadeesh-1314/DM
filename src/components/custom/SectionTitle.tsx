import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  textColor?: 'dark' | 'light';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  textColor = 'dark' 
}) => {
  const titleClass = textColor === 'dark' ? 'text-slate-800' : 'text-white';
  const subtitleClass = textColor === 'dark' ? 'text-slate-600' : 'text-purple-200';

  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold ${titleClass} mb-4`}>{title}</h2>
      <p className={`text-xl ${subtitleClass} max-w-3xl mx-auto`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;