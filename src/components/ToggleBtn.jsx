const ToggleBtn = ({ percentage, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-10 py-3 rounded-xl text-center text-2xl md:text-lg ${active ? 'bg-strong-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white'}`}
    >
      {percentage}
    </button>
  );
};

export default ToggleBtn;