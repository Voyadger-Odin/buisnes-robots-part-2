import { CardProps } from '@/features/card/types/types';
import { CardBody } from '@/features/card';
import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { CloseIcon } from '@/shared/icons/CloseIcon';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { ImgBottomIcon } from '@/shared/icons/ImgBottomIcon';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';
import { OnlyTextIcon } from '@/shared/icons/OnlyTextIcon';
import { ImgTopIcon } from '@/shared/icons/ImgTopIcon';
import { ImgLeftIcon } from '@/shared/icons/ImgLeftIcon';
import { SaveIcon } from '@/shared/icons/SaveIcon';

export const CardEdit = ({
  cardData,
  onImgPositionChange,
  onEditClose,
  children,
}: {
  cardData: CardProps;
  onImgPositionChange?: (imgPosition: string) => void;
  onEditClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        'shadow-[0_0_8px_#0000001A] rounded-[25px]',
      )}
    >
      {cardData.edit && (
        <div className={cn('flex flex-row items-center', 'mt-4 px-4')}>
          <div className={'cursor-pointer'} onClick={onEditClose}>
            <CloseIcon />
          </div>

          <div className={'flex-1'} />

          <div className={'flex flex-row gap-6'}>
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className={cn(
                    'border-[0.5px] border-[#818181] rounded-[5px] w-6 h-6',
                    'flex items-center justify-center',
                    'cursor-pointer',
                  )}
                >
                  <ImgBottomIcon />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align={'end'}
                side={'top'}
                className={'p-0 w-fit'}
              >
                <ToggleGroup
                  variant={'outline'}
                  type="single"
                  value={cardData.imgPosition}
                  onValueChange={onImgPositionChange}
                >
                  <ToggleGroupItem value="onlyText" className={'w-12 h-12'}>
                    <OnlyTextIcon />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bottom" className={'w-12 h-12'}>
                    <ImgBottomIcon />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="top" className={'w-12 h-12'}>
                    <ImgTopIcon />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="left" className={'w-12 h-12'}>
                    <ImgLeftIcon />
                  </ToggleGroupItem>
                </ToggleGroup>
              </PopoverContent>
            </Popover>

            <SaveIcon />
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
