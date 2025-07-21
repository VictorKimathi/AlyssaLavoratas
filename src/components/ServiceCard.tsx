import React from 'react';
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  deliverables
}) => {
  return <div className="bg-[#181C1F] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="text-[#61DAFB] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div>
        <h4 className="text-sm uppercase tracking-wider text-[#61DAFB] mb-2">
          Key Deliverables
        </h4>
        <ul className="text-gray-300 space-y-1">
          {deliverables.map((item, index) => <li key={index} className="flex items-start">
              <span className="text-[#61DAFB] mr-2">•</span>
              <span>{item}</span>
            </li>)}
        </ul>
      </div>
    </div>;
};
export default ServiceCard;