import React, { useState } from "react";
import {
  AlertCircle,
  Search,
  ArrowLeft,
  ThermometerSun,
  Stethoscope,
  Brain,
  Bone,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import { symptoms } from "../data";

// Define symptom categories
const symptomCategories = [
  {
    id: "common",
    title: "Common Symptoms",
    description: "Frequently experienced symptoms and conditions",
    icon: "thermometer",
    color: "from-blue-500 to-blue-600",
    symptoms: ["fever", "cold", "headache", "soreThroat", "nausea"],
  },
  {
    id: "digestive",
    title: "Digestive Issues",
    description: "Symptoms related to digestive system",
    icon: "stethoscope",
    color: "from-green-500 to-green-600",
    symptoms: ["stomachAche", "diarrhea", "constipation", "indigestion"],
  },
  {
    id: "emergency",
    title: "Emergency Conditions",
    description: "Serious conditions requiring immediate attention",
    icon: "brain",
    color: "from-red-500 to-red-600",
    symptoms: ["chestPain", "allergicReaction", "headInjury", "burns"],
  },
];

export const SymptomChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "thermometer":
        return <ThermometerSun className="w-8 h-8 text-white" />;
      case "stethoscope":
        return <Stethoscope className="w-8 h-8 text-white" />;
      case "brain":
        return <Brain className="w-8 h-8 text-white" />;
      case "bone":
        return <Bone className="w-8 h-8 text-white" />;
      default:
        return <AlertCircle className="w-8 h-8 text-white" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "severe":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const filteredSymptoms = symptoms.filter(
    (symptom) =>
      symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      symptom.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory) {
    const category = symptomCategories.find((c) => c.id === selectedCategory);
    const categorySymptoms = searchTerm
      ? filteredSymptoms.filter((s) => category?.symptoms.includes(s.id))
      : symptoms.filter((s) => category?.symptoms.includes(s.id));

    return (
      <div className="w-full max-w-4xl mx-auto p-6">
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

        {searchTerm && (
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
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
        )}

        <div className="grid grid-cols-1 gap-6">
          {categorySymptoms.length > 0 ? (
            categorySymptoms.map((symptom) => (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {symptom.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {symptom.description}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(
                        symptom.severity
                      )}`}
                    >
                      {symptom.severity}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {symptom.commonCauses.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Common Causes
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                          {symptom.commonCauses.map((cause, index) => (
                            <li key={index}>{cause}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Recommendations
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {symptom.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>

                    {symptom.seekMedicalAttention && (
                      <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-700 dark:text-red-400">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p>
                          Seek immediate medical attention if symptoms persist
                          or worsen
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No symptoms found in this category
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Symptom Checker
      </h2>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {symptomCategories.map((category) => {
          const categorySymptomCount = symptoms.filter((s) =>
            category.symptoms.includes(s.id)
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
                className={`bg-gradient-to-br ${category.color} p-6 rounded-xl shadow-lg`}
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
                      {categorySymptomCount}{" "}
                      {categorySymptomCount === 1 ? "symptom" : "symptoms"}
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

      {searchTerm && filteredSymptoms.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Search Results
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {filteredSymptoms.map((symptom) => (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-gray-900 dark:text-white font-medium">
                    {symptom.name}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${getSeverityColor(
                      symptom.severity
                    )}`}
                  >
                    {symptom.severity}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {symptom.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
