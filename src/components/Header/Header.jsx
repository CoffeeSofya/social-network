import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <img src='https://image.winudf.com/v2/image1/YnIuY29tLmFwcC5ncHUyMTIwOTMyLmdwdWQ3NjE0ZWU4MjJjNDU1YTUwMWFjMzc0OWUxMTRhNzRlX2ljb25fMTU2NDU5MTg0Nl8wODQ/icon.png?w=100&fakeurl=1'>
        </img>
        </div>
      </header>
  );
}

export default Header;