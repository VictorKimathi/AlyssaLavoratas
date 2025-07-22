import React from 'react';
import { ArrowRightIcon } from 'lucide-react'; // Still imported, but not used in the final clickable card

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  pdfLink: string; // Renamed from 'link' to be more explicit
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  pdfLink, // Using pdfLink for the href
}) => {
  return (
    <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="block"> {/* Opens PDF in new tab */}
      <div className="bg-[#181C1F] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          {/* Removed the Button component to make the entire card clickable for the PDF.
              If you still want a visual "View Case Study" button, you could style
              this text and icon directly within the <a> tag. */}
          <span className="flex items-center text-[#61DAFB] hover:text-[#4FBFEA] transition-colors duration-200">
            View Case Study <ArrowRightIcon size={16} className="ml-2" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;