"use client"
import React, { useEffect, useState } from 'react';
import lightMode from '../../public/light-mode.svg';
import darkMode from '../../public/dark-mode.svg';
import Image from "next/image";
const DarkModeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');

  interface CalculateSettingProps {
    localStorageTheme: string | null;
    systemSettingDark: MediaQueryList;
  }

  const calculateSettingAsThemeString = ({ localStorageTheme, systemSettingDark }: CalculateSettingProps): string => {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }

    if (systemSettingDark.matches) {
      return 'dark';
    }

    return 'light';
  };

  const localStorageTheme = localStorage.getItem('theme');
  const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    setTheme(
      calculateSettingAsThemeString({
        localStorageTheme,
        systemSettingDark,
      })
    );

    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      if (theme === 'light') {
        htmlElement.classList.remove('dark');
      } else {
        htmlElement.classList.add('dark');
      }
    }
  }, [localStorageTheme, systemSettingDark, theme]);

  const onClickHandler = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.classList.toggle('dark');
    }
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <button
        className='rounded-full bg-gray-400 bg-opacity-40 p-2'
        onClick={onClickHandler}
      >
        <Image 
          alt="theme"
          src={theme === 'light' ? darkMode : lightMode}
          className='h-6 w-6'
        />
      </button>
    </div>
  );
};

export default DarkModeSwitcher;
