import './mouse.css';

const Mouse = () => {
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