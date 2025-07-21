import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
      <div className={`h-1 w-20 bg-[#61DAFB] mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>;
};
export default SectionTitle;