import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, HeartPulse } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { EmergencyContacts } from "./components/EmergencyContacts";
import { EmergencyScenarios } from "./components/EmergencyScenarios";
import { FirstAidKit } from "./components/FirstAidKit";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "emergency", label: "Emergency" },
    { id: "contacts", label: "Contacts" },
    { id: "firstaid", label: "First Aid Kit" },
    { id: "symptoms", label: "Symptoms" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            isScrolled
              ? "mx-4 sm:mx-6 lg:mx-8 mt-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
              : "bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center justify-center w-9 h-9 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <img
                  src="/favicon.svg"
                  alt="InstaFirstAid Logo"
                  className="w-5 h-5"
                />
              </div>
              <h1 className="text-base font-semibold tracking-wide text-gray-900 dark:text-white">
                InstaFirstAid
              </h1>
            </motion.div>

            <nav className="flex items-center">
              <div className="hidden sm:flex sm:space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${
                        activeTab === tab.id
                          ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center ml-4">
                <ThemeToggle
                  isDark={isDark}
                  toggleTheme={() => setIsDark(!isDark)}
                />
              </div>

              <button className="sm:hidden ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "emergency" && <EmergencyScenarios />}
          {activeTab === "contacts" && <EmergencyContacts />}
          {activeTab === "firstaid" && <FirstAidKit />}
          {activeTab === "symptoms" && <SymptomChecker />}
        </motion.div>
      </main>
    </div>
  );
}

export default App;
