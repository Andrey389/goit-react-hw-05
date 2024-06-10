import { Link } from 'react-router-dom';
import css from './NotPage.module.css';

export default function NotPage() {
  return (
    <div className={css.text}>
      <p>
        No pages! Please go to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
