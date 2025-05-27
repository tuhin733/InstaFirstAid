import React, { useState, useRef, useEffect } from "react";
import { Phone, Shield, Flame, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { emergencyContacts } from "../data";

export const EmergencyContacts: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    emergencyContacts[0].country
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const contact = emergencyContacts.find((c) => c.country === selectedCountry);

  const filteredCountries = emergencyContacts.filter((contact) =>
    contact.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Emergency Contacts
      </h2>

      <div className="relative mb-6" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 flex items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:border-blue-500 dark:hover:border-blue-400
            transition-colors duration-200"
        >
          <span>{selectedCountry}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="p-2 border-b border-gray-200 dark:border-gray-600">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600
                      bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.map((contact) => (
                  <button
                    key={contact.country}
                    onClick={() => {
                      setSelectedCountry(contact.country);
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600
                      ${
                        selectedCountry === contact.country
                          ? "bg-blue-50 dark:bg-blue-900/20"
                          : ""
                      }
                      text-gray-800 dark:text-white transition-colors duration-150`}
                  >
                    {contact.country}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {contact && (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
          >
            <Phone className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ambulance
              </p>
              <p className="text-lg font-bold text-red-600 dark:text-red-400">
                {contact.ambulance}
              </p>
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
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {contact.police}
              </p>
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
              <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                {contact.fire}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
