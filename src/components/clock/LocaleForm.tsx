import React from 'react';
import Select, { SingleValue } from 'react-select';
import { Controller, useForm } from 'react-hook-form';

export type LocaleFormProps = {
  setLocale: (localeValue: string) => void;
};

interface ILocaleFormInput {
  locale: { label: string; value: string };
}

const options = [
  { label: '東京', value: 'Asia/Tokyo' },
  { label: '世界協定時間', value: 'Etc/GMT' },
  { label: '北京', value: 'Asia/Shanghai' },
  { label: 'ロサンゼルス', value: 'America/Los_Angeles' },
  { label: 'ロンドン', value: 'Europe/London' },
];

const defaultValue = { label: '東京', value: 'Asia/Tokyo' };

export const LocaleForm: React.FC<LocaleFormProps> = ({ setLocale }) => {
  const { control } = useForm<ILocaleFormInput>();

  return (
    <form>
      <Controller
        name='locale'
        control={control}
        render={({ field: { onChange, ...field } }) => {
          const onLocaleChange = (
            newValue: SingleValue<{
              label: string;
              value: string;
            }>
          ) => {
            onChange(newValue);
            if (newValue) setLocale(newValue.value);
          };

          return (
            <Select
              {...field}
              options={options}
              defaultValue={defaultValue}
              onChange={onLocaleChange}
            />
          );
        }}
      />
    </form>
  );
};
