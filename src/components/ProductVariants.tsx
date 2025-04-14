import React, { useState } from 'react';
const VariantOption: React.FC<{
  active: boolean;
  variant: 'one' | 'two';
  onClick: () => void;
}> = ({
  active,
  variant,
  onClick
}) => {
  return <div className={`relative w-full p-4 rounded-lg border ${active ? 'bg-purple-lighter border-purple' : 'bg-white border-gray-200'}`} onClick={onClick}>
      <div className="flex items-center">
        <div className={`w-3.5 h-3.5 rounded-full mr-4 border border-purple ${active ? 'bg-purple' : 'bg-white'}`} />
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-md mr-3">
              {/* Placeholder for pack image */}
            </div>
            <div>
              <p className="font-bold text-[#4d4d4d]">{variant === 'one' ? '1 Pack' : '2 Pack'}</p>
              {variant === 'two' && <p className="text-xs">
                  Includes <span className="font-bold text-purple">FREE</span> shipping
                </p>}
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-purple">{variant === 'one' ? '$29' : '$49'}</p>
          <p className="text-xs text-[#4d4d4d] line-through">{variant === 'one' ? '$47' : '$94'}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 py-1 px-2 bg-purple-light rounded-full">
        <span className="text-xs font-bold">SAVE {variant === 'one' ? '$18' : '$45'}</span>
      </div>
    </div>;
};
const ProductVariants: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'one' | 'two'>('two');
  return <div className="w-full px-4 space-y-2">
      <VariantOption active={selectedVariant === 'one'} variant="one" onClick={() => setSelectedVariant('one')} />
      <VariantOption active={selectedVariant === 'two'} variant="two" onClick={() => setSelectedVariant('two')} />

      <div className="w-full bg-purple rounded-b-lg p-3 text-white flex items-center">
        <div className="w-12 h-10 bg-gray-100 rounded-md mr-3">
          {/* Placeholder for body scrub image */}
        </div>
        <div>
          <p className="text-sm">
            <span className="font-bold">+ FREE</span> Body scrub for silky &amp; shiny skin
          </p>
        </div>
      </div>

      <div className="flex items-center mt-4 ml-4">
        <div className="w-2.5 h-2.5 rounded-full bg-orange mr-2"></div>
        <p className="text-xs text-orange">
          <span className="font-bold">FREE SHIPPING</span> <span className="font-semibold">included for the next </span>
          <span className="font-semibold">orders!</span>
        </p>
      </div>
    </div>;
};
export default ProductVariants;