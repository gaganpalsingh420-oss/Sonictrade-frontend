export default function StockCard({ stock }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-lg font-bold">{stock.name}</h2>
      <p className="text-gray-400">{stock.symbol}</p>

      <p className="mt-2 text-2xl font-bold">
        ₹ {stock.price ? stock.price.toFixed(2) : "—"}
      </p>

      <p className={stock.changePercent >= 0 ? "text-green-400" : "text-red-400"}>
        {stock.changePercent ? stock.changePercent.toFixed(2) + "%" : "—"}
      </p>
    </div>
  );
}
