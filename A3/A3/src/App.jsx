import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import customers from './customers-100.json';
import './App.css';

const ITEMS_PER_PAGE = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState({});

  const handlePageChange = (page) => setCurrentPage(page);

  const toggleSortSTT = () => {
    setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const toggleFilterInput = (key) => {
    setShowFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredData = customers.filter((item) =>
    Object.entries(filters).every(([key, value]) => {
      const itemValue = (item[keyMapping[key]] || '').toString().toLowerCase();
      return itemValue.includes(value.toLowerCase());
    })
  );

  const sortedData = sortDirection === 'asc' ? filteredData : [...filteredData].reverse();

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const currentData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 cursor-pointer" onClick={toggleSortSTT}>
                <div className="flex items-center gap-1">
                  STT
                  <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                </div>
              </th>
              {['customerId', 'firstName', 'lastName', 'email', 'phone', 'country'].map((key) => (
                <th key={key} className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    {headerMapping[key]}
                    <button
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => toggleFilterInput(key)}
                    >
                      <FiSearch />
                    </button>
                  </div>
                  {showFilters[key] && (
                    <input
                      type="text"
                      placeholder={`Lọc ${headerMapping[key]}`}
                      className="mt-1 p-1 border rounded w-full text-xs"
                      value={filters[key] || ''}
                      onChange={(e) => handleFilterChange(key, e.target.value)}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  Không có dữ liệu phù hợp
                </td>
              </tr>
            ) : (
              currentData.map((item, index) => (
                <tr key={item['Customer Id']} className="bg-white border-b hover:bg-gray-50">
                  {/* <td className="px-6 py-4">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td> */}
                  <td className="px-6 py-4">{item.Index}</td>
                  <td className="px-6 py-4">{item['Customer Id']}</td>
                  <td className="px-6 py-4">{item['First Name']}</td>
                  <td className="px-6 py-4">{item['Last Name']}</td>
                  <td className="px-6 py-4">{item['Email']}</td>
                  <td className="px-6 py-4">{item['Phone 1']}</td>
                  <td className="px-6 py-4">{item['Country']}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Phân trang */}
        <div className="flex items-center justify-between pt-4">
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100"
              >
                Trang trước
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, i) => (
              <li key={i}>
                <button
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 h-8 border border-gray-300 ${
                    currentPage === i + 1
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 bg-white hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100"
              >
                Trang sau
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const keyMapping = {
  customerId: 'Customer Id',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone 1',
  country: 'Country',
};

const headerMapping = {
  customerId: 'Customer ID',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone',
  country: 'Country',
};

export default App;
