import React, { useState } from "react";
import {
  AlertCircle,
  Scissors,
  Flame,
  Brain,
  AlertOctagon,
  Heart,
  Sun,
  Pill,
  Stethoscope,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { emergencyScenarios, emergencyCategories } from "../data";

export const EmergencyScenarios: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter emergency scenarios based on the search term
  const filteredScenarios = emergencyScenarios.filter(
    (scenario) =>
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "bandage":
        return <Pill className="w-8 h-8 text-white" />;
      case "stethoscope":
        return <Stethoscope className="w-8 h-8 text-white" />;
      case "sun":
        return <Sun className="w-8 h-8 text-white" />;
      case "heart":
        return <Heart className="w-8 h-8 text-white" />;
      default:
        return <AlertCircle className="w-8 h-8 text-white" />;
    }
  };

  const getScenarioIcon = (id: string) => {
    switch (id) {
      case "bleeding":
        return <Scissors className="w-6 h-6 text-red-500" />;
      case "burns":
        return <Flame className="w-6 h-6 text-orange-500" />;
      case "choking":
        return <AlertOctagon className="w-6 h-6 text-red-500" />;
      case "stroke":
        return <Brain className="w-6 h-6 text-purple-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-red-500" />;
    }
  };

  const getCategoryColor = (id: string) => {
    switch (id) {
      case "trauma":
        return "from-red-500 to-red-600";
      case "medical":
        return "from-blue-500 to-blue-600";
      case "environmental":
        return "from-yellow-500 to-yellow-600";
      case "cardiac":
        return "from-purple-500 to-purple-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  if (selectedCategory) {
    const category = emergencyCategories.find((c) => c.id === selectedCategory);
    const scenarios = searchTerm
      ? filteredScenarios.filter((s) => s.categoryId === selectedCategory)
      : emergencyScenarios.filter((s) => s.categoryId === selectedCategory);

    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Categories</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {category?.title}
          </h2>
        </div>

        <div className="space-y-4">
          {scenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                    {getScenarioIcon(scenario.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {scenario.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <ol className="space-y-4">
                    {scenario.steps.map((step, stepIndex) => (
                      <li
                        key={stepIndex}
                        className="flex items-start space-x-3"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-medium">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>

                  {scenario.warning && (
                    <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-700 dark:text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p>{scenario.warning}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Emergency Categories
      </h2>

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

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {emergencyCategories.map((category) => {
          const scenarioCount = emergencyScenarios.filter(
            (s) => s.categoryId === category.id
          ).length;

          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-left"
            >
              <div
                className={`bg-gradient-to-br ${getCategoryColor(
                  category.id
                )} p-6 rounded-xl shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {category.description}
                    </p>
                    <p className="text-white/80 text-sm">
                      {scenarioCount}{" "}
                      {scenarioCount === 1 ? "scenario" : "scenarios"}
                    </p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    {getCategoryIcon(category.icon)}
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
