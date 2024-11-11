import React, { useState } from 'react';
import { Package, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { medicalSupplies } from '../data/emergencyData';

export const MedicalSupplies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter medical supplies based on the search term
  const filteredSupplies = medicalSupplies.filter(supply =>
    supply.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">First Aid Kit Guide</h2>

      {/* Search input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search supplies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 
            focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredSupplies.map((supply, index) => (
          <motion.div
            key={supply.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Package className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {supply.name}
              </h3>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                How to Use
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{supply.usage}</p>
            </div>

            {supply.warnings.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span>Warnings</span>
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {supply.warnings.map((warning, wIndex) => (
                    <li key={wIndex} className="text-gray-700 dark:text-gray-300 text-sm">
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
