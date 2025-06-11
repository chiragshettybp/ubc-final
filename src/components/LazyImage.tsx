
import React from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzAgODdIMTcwVjExM0gxMzBWODdaIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0xNDEuNSA5OEwxMzAgMTEzSDE3MEwxNTguNSA5OEwxNTAgMTA2TDE0MS41IDk4WiIgZmlsbD0iI0U1RTdFQiIvPgo8L3N2Zz4K'
}) => {
  const { isLoaded, isInView, imgRef, handleLoad } = useLazyLoad();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={isInView ? src : placeholder}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
      />
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;
