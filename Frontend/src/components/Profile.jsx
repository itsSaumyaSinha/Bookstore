import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  // Dummy data for demonstration
  const user = {
    name: 'Aarav Patel',
    email: 'aarav.patel@example.com',
    membership: 'Platinum',
  };

  const orders = [
    { id: 1, date: '2024-07-01', total: '₹2,299.00', status: 'Shipped' },
    { id: 2, date: '2024-06-15', total: '₹1,499.00', status: 'Delivered' },
  ];

  const recommendations = [
    { title: 'Book of the Year', author: 'Priya Sharma', price: '₹1,199.00' },
    { title: 'The Great Indian Novel', author: 'Ravi Kumar', price: '₹899.00' },
  ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-20 py-12">
      {/* Profile Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14v7m0 0h-4m4 0h4"
            />
          </svg>
          Profile
        </h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4 ">
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-500"
            />
          </div>
          <div className="flex-grow mt-4 sm:mt-0">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            <p className="text-gray-600 dark:text-gray-400">Membership: {user.membership}</p>
          </div>
        </div>
      </div>

      {/* Order History Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600 dark:text-green-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Order History
        </h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Book Recommendations Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5h3l1 14h10l1-14h3M6 3h12a1 1 0 0 1 1 1v2H5V4a1 1 0 0 1 1-1z"
            />
          </svg>
          Recommended Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendations.map((book, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">by {book.author}</p>
              <p className="text-gray-900 dark:text-gray-100">{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr/>
    <Footer/>
    </>
  );
};

export default Dashboard;
