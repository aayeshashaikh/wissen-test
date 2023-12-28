import React, { useState } from 'react';
import { Controller, useFormContext, MultipleFieldErrors } from 'react-hook-form';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles.css';

interface CustomTextFieldProps {
  errors?: {
    type?: string;
    message?: string;
    types?: MultipleFieldErrors;
  };
  name: string;
  label: string;
  placeholder?: string;
  disable?: boolean;
  type?: string;
  displayLabel?: boolean;
  className?: string;
  inputClassName?: string;
  isDisable?: boolean;
}

const InputField: React.FC<CustomTextFieldProps> = ({
  errors,
  name,
  label,
  placeholder,
  disable,
  type = 'text',
  className,
  inputClassName,
  isDisable = false,
}: CustomTextFieldProps) => {
  const [passwordType, setPasswordType] = useState(type);
  const { register, control } = useFormContext();
  return (
    <Controller
      name={`${name}`}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <div className={`${className && inputClassName ? 'material-textfield' : 'form-label-group'}`}>
            <label className={`${errors?.message ? 'error-label' : ''}`}>
              {label}
            </label>
            <input
              readOnly={isDisable}
              {...register}
              className={`${errors?.message ? 'error-message' : ''} ${type === 'select' ? 'hidden' : ''} ${
                inputClassName ? inputClassName : 'form-control'
              }`}
              type={type === 'password' ? passwordType : type}
              /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
              value={value === null || value === undefined ? '' : value}
              onChange={onChange}
              placeholder={placeholder ? placeholder : label}
              autoComplete='off'
              disabled={!!disable}
            />
            {type === 'password' && (
              <FontAwesomeIcon
                icon={passwordType === 'password' ? faEye : faEyeSlash}
                className={`absolute ${errors?.message ? 'bottom-[3rem]' : 'bottom-5'} right-5 cursor-pointer`}
                onClick={() => {
                  if (passwordType === 'password') {
                    setPasswordType('text');
                    return;
                  }
                  setPasswordType('password');
                }}
              />
            )}
            {errors?.message && <p className='text-[#ff0000] mt-1 text-base font-light'>{errors?.message}</p>}
          </div>
        </>
      )}
    />
  );
};

export default InputField;
