import { useProducts } from "../hooks/useAppContext";

const RecentProducts = () => {
  const { products } = useProducts();

  const recentProducts = products
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 5);

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-700";
      case "Out of Stock":
        return "text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-700";
      case "Low Stock":
        return "text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-700";
      default:
        return "text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-700";
    }
  };

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-sm  dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-50 dark:border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">
          Recent Added Products
        </h3>
        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 text-sm font-medium">
          View all
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white dark:bg-card">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-card rounded-lg p-5 shadow-sm  dark:border-gray-700 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {/* Name and Status on same row */}
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-foreground truncate">
                  {product.name}
                </h4>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    product.status
                  )}`}
                  style={{ minWidth: "90px", textAlign: "center" }}
                >
                  {product.status}
                </span>
              </div>

              {/* Category and Date below */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.category}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap mt-2">
                {product.dateAdded}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
