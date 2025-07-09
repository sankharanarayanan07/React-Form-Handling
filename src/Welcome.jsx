import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { name } = location.state || {};  // fallback if direct access

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-cyan-950">Welcome to React, {name}</h1>
    </div>
  );
}

export default Welcome;
