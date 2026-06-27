import { BsStarFill } from 'react-icons/bs';

interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  return (
    <div className='flex items-center gap-1 '>
      {Array.from({ length: rating }).map((_, index) => (
        <BsStarFill key={index} fill='#F3B64C' className='size-6' />
      ))}
    </div>
  );
}
