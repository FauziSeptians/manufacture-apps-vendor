import { classNames } from '@/utils/classNames';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ImageOptimize({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  onClick,
  ...rest
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div
      className={classNames(
        'flex items-center justify-center bg-gray-100 text-gray-500',
        className
      )}
    >
      <ImageIcon size={96} />
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={90}
      className={classNames(className, 'cursor-pointer')}
      onError={() => setHasError(true)}
      onClick={onClick}
      {...rest}
    />
  );
}
