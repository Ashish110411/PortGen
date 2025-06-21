// import React, { useEffect, useState } from "react";
// import FormSection from "./components/FormSection";
//
// function App() {
//     const [darkMode, setDarkMode] = useState(false);
//
//     useEffect(() => {
//         document.body.className = darkMode ? "dark" : "";
//     }, [darkMode]);
//
//     return (
//         <div className="app-container">
//             <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
//                 {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//             </div>
//
//             <h1 className="form-title">Portfolio Submission Form</h1>
//             <FormSection />
//         </div>
//     );
// }
//
// export default App;
import React from "react";
import PortfolioForm from "./components/PortfolioForm";

function App() {
    return <PortfolioForm />;
}

export default App;
