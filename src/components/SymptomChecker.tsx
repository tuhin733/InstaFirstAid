import React, { useState } from "react";
import { Search, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { symptoms } from "../data/emergencyData";

export const SymptomChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColumn = filteredSymptoms.filter((_, index) => index % 2 === 0);
  const rightColumn = filteredSymptoms.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Symptom Checker
      </h2>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 
            focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex gap-4">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          {leftColumn.map((symptom) => (
            <motion.div
              key={symptom.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-4"
            >
              <div className="flex-1 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {symptom.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {symptom.subtitle}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {symptom.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Recommendations
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h4 className="font-semibold text-red-700 dark:text-red-400">
                    Seek Medical Help If:
                  </h4>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.seekHelp.map((help, index) => (
                    <li key={index} className="text-red-700 dark:text-red-400">
                      {help}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          {rightColumn.map((symptom) => (
            <motion.div
              key={symptom.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-4"
            >
              <div className="flex-1 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {symptom.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {symptom.subtitle}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {symptom.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Recommendations
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h4 className="font-semibold text-red-700 dark:text-red-400">
                    Seek Medical Help If:
                  </h4>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.seekHelp.map((help, index) => (
                    <li key={index} className="text-red-700 dark:text-red-400">
                      {help}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
