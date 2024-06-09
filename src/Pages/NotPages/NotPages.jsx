import { Link } from 'react-router-dom';
import css from './NotPages.module.css';

export default function NotPages() {
  return (
    <div className={css.text}>
      <p>
        No pages! Please go to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
