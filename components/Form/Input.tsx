import classNames from 'classnames';
import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { MessageError } from './Error';

interface Props {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  id?: string;
}

const FormInput: FC<Props> = ({
  type,
  placeholder,
  name,
  className = '',
  id,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        className={classNames(
          'w-full rounded-lg border border-gray-200 p-3 text-sm',
          ...className.split(' ')
        )}
        {...register(name)}
        type={type}
        id={id}
        placeholder={placeholder}
      />
      <MessageError message={errors[name]?.message} />
    </>
  );
};

export default FormInput;
