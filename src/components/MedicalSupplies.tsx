import React, { useState } from "react";
import {
  AlertCircle,
  Package,
  Pill,
  Scissors,
  Thermometer,
  ArrowLeft,
  Search,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { medicalSupplies } from "../data";

// Define supply categories
const supplyCategories = [
  {
    id: "bandages",
    title: "Bandages & Dressings",
    description: "Essential supplies for wound care and protection",
    icon: "bandage",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "medications",
    title: "Medications",
    description: "Common over-the-counter medicines for various conditions",
    icon: "pill",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "tools",
    title: "Medical Tools",
    description: "Basic medical instruments and equipment",
    icon: "scissors",
    color: "from-green-500 to-green-600",
  },
  {
    id: "emergency",
    title: "Emergency Items",
    description: "Critical supplies for emergency situations",
    icon: "alert",
    color: "from-red-500 to-red-600",
  },
];

// Categorize supplies
const categorizedSupplies = {
  bandages: [
    "bandage",
    "gauze",
    "tape",
    "elastic_bandage",
    "triangular_bandage",
  ],
  medications: [
    "pain_reliever",
    "burn_ointment",
    "antihistamine",
    "anti_diarrheal",
    "fever_medication",
    "headache_relief",
    "cough_syrup",
    "cold_medicine",
  ],
  tools: [
    "tweezers",
    "scissors",
    "thermometer",
    "cpr_mask",
    "gloves",
    "safety_pins",
  ],
  emergency: [
    "cold_pack",
    "saline_solution",
    "oral_rehydration_salts",
    "eye_drops",
  ],
};

export const MedicalSupplies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "bandage":
        return <Package className="w-8 h-8 text-white" />;
      case "pill":
        return <Pill className="w-8 h-8 text-white" />;
      case "scissors":
        return <Scissors className="w-8 h-8 text-white" />;
      case "alert":
        return <AlertCircle className="w-8 h-8 text-white" />;
      default:
        return <AlertCircle className="w-8 h-8 text-white" />;
    }
  };

  const filteredSupplies = medicalSupplies.filter(
    (supply) =>
      supply.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supply.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory) {
    const category = supplyCategories.find((c) => c.id === selectedCategory);
    const supplies = searchTerm
      ? filteredSupplies.filter((s) =>
          categorizedSupplies[
            selectedCategory as keyof typeof categorizedSupplies
          ].includes(s.id)
        )
      : medicalSupplies.filter((s) =>
          categorizedSupplies[
            selectedCategory as keyof typeof categorizedSupplies
          ].includes(s.id)
        );

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supplies.map((supply) => (
            <motion.div
              key={supply.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {supply.name}
                  </h3>
                  {supply.essential && (
                    <span className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Essential</span>
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {supply.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Quantity: {supply.quantity}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full ${
                      supply.essential
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {supply.category}
                  </span>
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
        First Aid Kit Guide
      </h2>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search medical supplies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 
            focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supplyCategories.map((category) => {
          const suppliesCount =
            categorizedSupplies[category.id as keyof typeof categorizedSupplies]
              .length;

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
                      {suppliesCount} {suppliesCount === 1 ? "item" : "items"}
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
