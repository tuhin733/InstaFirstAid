import React, { useState } from 'react';
import { Phone, Shield, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { emergencyContacts } from '../data/emergencyData';

export const EmergencyContacts: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(emergencyContacts[0].country);

  const contact = emergencyContacts.find(c => c.country === selectedCountry);

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Emergency Contacts</h2>
      
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="w-full mb-6 p-2 rounded-lg border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        {emergencyContacts.map(contact => (
          <option key={contact.country} value={contact.country}>
            {contact.country}
          </option>
        ))}
      </select>

      {contact && (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
          >
            <Phone className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Ambulance</p>
              <p className="text-lg font-bold text-red-600 dark:text-red-400">{contact.ambulance}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
          >
            <Shield className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Police</p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{contact.police}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
          >
            <Flame className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Fire</p>
              <p className="text-lg font-bold text-orange-600 dark:text-orange-400">{contact.fire}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};