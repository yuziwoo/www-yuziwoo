import { useEffect } from 'react';
import './mouse.css';

const Mouse = () => {
  useEffect(() => {
    const noTouch = () => {
      document.getElementById('mouse-event').style.display = 'none';
      document.body.removeEventListener('touchstart', noTouch);
    }

    document.body.addEventListener('touchstart', noTouch);
  }, []);
  return (
    <div id='mouse-event'>
      <svg>
        <circle id='mouse-pointer'></circle>
        <polyline id='mouse-polyline'></polyline>
      </svg>
    </div>
  )
}

export default Mouse;