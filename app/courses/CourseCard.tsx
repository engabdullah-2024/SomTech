import Image from 'next/image';

export interface CourseCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
  discount: string;
}

const CourseCard = ({ imageUrl, name, description, price, discount }: CourseCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg font-semibold text-green-600 mt-2">{price}</p>
        <p className="text-xs text-red-500 line-through">{discount}</p>
      </div>
    </div>
  );
};

export default CourseCard;
