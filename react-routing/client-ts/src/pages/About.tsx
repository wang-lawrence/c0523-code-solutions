import './About.css';
import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="about">
        <div className="text">Happy Shopping!</div>
        <Link to="hi">Hi</Link>
        <Link to="bye">Bye</Link>
      </div>
      <Outlet />
    </>
  );
}
