import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const { products, sales } = useSelector(state => state.stockReducer);

  const totalProducts = products.length;

  const totalRevenue = sales.reduce(
    (acc, sale) => acc + sale.totalAmount,
    0
  );

  // 📈 Monthly Revenue (current month only)
  const currentMonth = new Date().getMonth();
  const monthlyRevenue = sales
    .filter(sale => new Date(sale.date).getMonth() === currentMonth)
    .reduce((acc, sale) => acc + sale.totalAmount, 0);

  // 📊 Sales count per product
  const salesCount = {};

  sales.forEach(sale => {
    salesCount[sale.productId] =
      (salesCount[sale.productId] || 0) + sale.quantity;
  });

  // Convert to array with product names
  const salesData = Object.keys(salesCount).map(id => {
    const product = products.find(p => p.id === Number(id));
    return {
      name: product?.name || "Unknown",
      quantity: salesCount[id]
    };
  });

  // 📉 Most Sold Product
  const mostSold = salesData.sort((a, b) => b.quantity - a.quantity)[0];

  // 📦 Least Sold Product
  const leastSold = salesData.length > 0
    ? salesData[salesData.length - 1]
    : null;

  // 💰 Profit Estimation (Assume 20%)
  const profit = totalRevenue * 0.2;

  // 🏆 Top 5 Products
  const top5 = [...salesData]
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);

  return (
    <div className="dashboard-card">
      <h2>Dashboard Analytics</h2>

      <p>Total Products: {totalProducts}</p>
      <p>Total Revenue: ₹{totalRevenue}</p>
      <p>Monthly Revenue: ₹{monthlyRevenue}</p>
      <p>Estimated Profit (20%): ₹{profit.toFixed(2)}</p>

      {mostSold && (
        <p>📈 Most Sold Product: {mostSold.name} ({mostSold.quantity} sold)</p>
      )}

      {leastSold && (
        <p>📦 Least Sold Product: {leastSold.name} ({leastSold.quantity} sold)</p>
      )}

      <h3>🏆 Top 5 Products</h3>

      <BarChart width={500} height={300} data={top5}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" />
      </BarChart>
    </div>
  );
}