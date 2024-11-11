import React, { useState } from 'react';
import { AlertCircle, Scissors, Flame, Brain, ChevronDown, ChevronUp, AlertOctagon, Bone, Zap, Thermometer, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { emergencyScenarios } from '../data/emergencyData';

export const EmergencyScenarios: React.FC = () => {
  const [expandedScenario, setExpandedScenario] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter emergency scenarios based on the search term
  const filteredScenarios = emergencyScenarios.filter(scenario =>
    scenario.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScenarioIcon = (id: string) => {
    switch (id) {
      case 'bleeding':
        return <Scissors className="w-6 h-6 text-red-500" />;
      case 'burns':
        return <Flame className="w-6 h-6 text-orange-500" />;
      case 'choking':
        return <AlertOctagon className="w-6 h-6 text-red-500" />;
      case 'sprains':
        return <Bone className="w-6 h-6 text-green-500" />;
      case 'stroke':
        return <Brain className="w-6 h-6 text-purple-500" />;
      case 'seizures':
        return <Zap className="w-6 h-6 text-red-500" />;
      case 'heatstroke':
        return <Thermometer className="w-6 h-6 text-red-500" />;
      case 'poisoning':
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-red-500" />;
    }
  };

  // Divide filtered emergency scenarios into two columns
  const leftColumn = filteredScenarios.filter((_, index) => index % 2 === 0);
  const rightColumn = filteredScenarios.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Emergency Scenarios</h2>
      
      {/* Search input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search scenarios..."
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
          {leftColumn.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedScenario(expandedScenario === scenario.id ? null : scenario.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 
                  dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                    {getScenarioIcon(scenario.id)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{scenario.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{scenario.description}</p>
                  </div>
                </div>
                {expandedScenario === scenario.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {expandedScenario === scenario.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-4 space-y-4">
                      <ol className="space-y-3">
                        {scenario.steps.map((step, stepIndex) => (
                          <motion.li
                            key={stepIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: stepIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 
                              dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 
                              flex items-center justify-center text-sm font-medium">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                          </motion.li>
                        ))}
                      </ol>

                      {scenario.warning && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start space-x-2 p-3 bg-red-50 dark:bg-red-900/20 
                            rounded-lg text-red-700 dark:text-red-400"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p>{scenario.warning}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          {rightColumn.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedScenario(expandedScenario === scenario.id ? null : scenario.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 
                  dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                    {getScenarioIcon(scenario.id)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{scenario.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-white">{scenario.description}</p>
                  </div>
                </div>
                {expandedScenario === scenario.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {expandedScenario === scenario.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-4 space-y-4">
                      <ol className="space-y-3">
                        {scenario.steps.map((step, stepIndex) => (
                          <motion.li
                            key={stepIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: stepIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 
                              dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 
                              flex items-center justify-center text-sm font-medium">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                          </motion.li>
                        ))}
                      </ol>

                      {scenario.warning && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start space-x-2 p-3 bg-red-50 dark:bg-red-900/20 
                            rounded-lg text-red-700 dark:text-red-400"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p>{scenario.warning}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
