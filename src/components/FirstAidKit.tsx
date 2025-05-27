import React, { useState } from "react";
import {
  Search,
  AlertCircle,
  Pill,
  Syringe,
  Package,
  ShieldPlus,
  Flashlight,
  Scroll,
} from "lucide-react";
import { motion } from "framer-motion";
import { medications, medicalSupplies } from "../data";

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Over-the-Counter": <Pill className="w-6 h-6" />,
  "Bandages & Dressings": <Package className="w-6 h-6" />,
  "Medical Tools": <Syringe className="w-6 h-6" />,
  Protection: <ShieldPlus className="w-6 h-6" />,
  Emergency: <AlertCircle className="w-6 h-6" />,
  Cleaning: <ShieldPlus className="w-6 h-6" />,
  Reference: <Scroll className="w-6 h-6" />,
};

export const FirstAidKit: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"medications" | "supplies">(
    "medications"
  );

  const filteredMedications = medications.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.commonUses.some((use) =>
        use.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const filteredSupplies = medicalSupplies.filter(
    (supply) =>
      supply.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supply.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(
    new Set(
      activeTab === "medications"
        ? medications.map((med) => med.category)
        : medicalSupplies.map((supply) => supply.category)
    )
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        First Aid Kit Guide
      </h2>

      {/* Tab Switcher */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("medications")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "medications"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          Medications
        </button>
        <button
          onClick={() => setActiveTab("supplies")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "supplies"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          Supplies
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 
            focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Content */}
      <div className="space-y-8">
        {categories.map((category) => {
          const items =
            activeTab === "medications"
              ? filteredMedications.filter((med) => med.category === category)
              : filteredSupplies.filter(
                  (supply) => supply.category === category
                );

          if (items.length === 0) return null;

          return (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                <span>{categoryIcons[category]}</span>
                <span>{category}</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {item.description}
                          </p>
                        </div>
                        {item.essential && (
                          <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm font-medium">
                            Essential
                          </span>
                        )}
                      </div>

                      {"examples" in item && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Examples
                          </h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            {item.examples.map((example, index) => (
                              <li key={index}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {"commonUses" in item && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Common Uses
                          </h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            {item.commonUses.map((use, index) => (
                              <li key={index}>{use}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {"quantity" in item && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Recommended Quantity
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.quantity}{" "}
                            {item.quantity === 1 ? "unit" : "units"}
                          </p>
                        </div>
                      )}

                      {"dosageForm" in item && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Available Forms
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.dosageForm.map((form, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                              >
                                {form}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Important Warnings
                        </h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                          {item.warnings.map((warning, index) => (
                            <li key={index}>{warning}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
