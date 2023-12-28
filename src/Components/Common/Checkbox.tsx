import React from 'react';
import { Controller, useFormContext, MultipleFieldErrors } from 'react-hook-form';

interface CheckboxProps {
  label: string;
  name: string;
  errors?: {
    type?: string;
    message?: string;
    types?: MultipleFieldErrors;
  };
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, errors }: CheckboxProps) => {
  const { register, control } = useFormContext();
  return (
    <Controller
      name={`${name}`}
      control={control}
      render={({ field: { onChange, value = false } }) => (
        <div className='flex py-4'>
          <input
            {...register}
            className='relative mt-[0.15rem] mr-[6px] min-w-[18px] !h-[20px] !w-[20px] md:h-[10px] md:w-[10px] lg:h-[10px] lg:w-[10px] xl:h-[20px] xl:w-[20px] checked:bg-[#e7f6fd]'
            type='checkbox'
            name={name}
            onChange={onChange}
            checked={value as boolean}
          />
          <p className='inline-block text-[#7b7b7b] lg:text-lg xl:text-lg hover:cursor-pointer'>{label}</p>
          {errors?.message && <p className='text-[#ff0000] mt-1 text-base font-light'>{errors?.message}</p>}
        </div>
      )}
    />
  );
};

export default Checkbox;
