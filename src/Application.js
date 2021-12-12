import { Routes, Route, Link } from 'react-router-dom';

function Application() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-300">Hello world!</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="about" element={<p>About</p>} />
      </Routes>
    </div>
  );
}

export default Application;
