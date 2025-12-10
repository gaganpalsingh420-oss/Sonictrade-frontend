import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between">
      <h1 className="text-xl font-bold text-green-400">SonicTrade</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
}
