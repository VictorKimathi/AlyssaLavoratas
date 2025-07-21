import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Button from './Button';
interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  link
}) => {
  return <div className="bg-[#181C1F] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Button to={link} variant="outline" className="flex items-center">
          View Case Study <ArrowRightIcon size={16} className="ml-2" />
        </Button>
      </div>
    </div>;
};
export default PortfolioCard;