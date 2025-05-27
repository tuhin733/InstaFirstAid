import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, HeartPulse } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { EmergencyContacts } from "./components/EmergencyContacts";
import { EmergencyScenarios } from "./components/EmergencyScenarios";
import { MedicalSupplies } from "./components/MedicalSupplies";
import { SymptomChecker } from "./components/SymptomChecker";

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [activeTab, setActiveTab] = useState("emergency");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const tabs = [
    { id: "emergency", label: "Emergency" },
    { id: "contacts", label: "Contacts" },
    { id: "supplies", label: "First Aid Kit" },
    { id: "symptoms", label: "Symptoms" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <header className="pt-8 pb-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <div className="flex items-center justify-center w-10 h-10">
              <img
                src="/favicon.svg"
                alt="InstaFirstAid Logo"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              InstaFirstAid
            </h1>
          </motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Instant access to emergency procedures, medical guidance, and
            emergency contacts tailored to your country
          </p>
        </div>
      </header>

      <nav className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 pb-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "emergency" && <EmergencyScenarios />}
          {activeTab === "contacts" && <EmergencyContacts />}
          {activeTab === "supplies" && <MedicalSupplies />}
          {activeTab === "symptoms" && <SymptomChecker />}
        </motion.div>
      </main>
    </div>
  );
}

export default App;
