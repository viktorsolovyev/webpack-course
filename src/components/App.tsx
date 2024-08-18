import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/calendar.svg';

function TODO() {
  TODO2();
}

function TODO2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div data-testid={'App.DataTestId'}>
      <div>
        <img width={100} height={100} src={avatarPng} alt="Avatar" />
        <img width={100} height={100} src={avatarJpg} alt="Avatar" />
        <Calendar width={50} height={50} fill={'blue'} />
      </div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <h2>{count}</h2>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
      <button className={classes.button} onClick={TODO}>
        throw new Error        
      </button>
      <Outlet />
    </div>
  );
};
