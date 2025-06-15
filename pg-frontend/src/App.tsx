// import { useEffect, useState } from 'react';
// import FormSection from './components/FormSection';
//
// function App() {
//     const [darkMode, setDarkMode] = useState(false);
//
//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);
//
//     return (
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6 text-gray-900 dark:text-white transition-colors duration-300">
//             <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
//
//                 <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-2xl font-bold text-center w-full">Portfolio Website Generator</h1>
//                     <button
//                         onClick={() => setDarkMode(!darkMode)}
//                         className="absolute top-6 right-6 text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded"
//                     >
//                         {darkMode ? 'Light Mode' : 'Dark Mode'}
//                     </button>
//                 </div>
//
//                 <FormSection />
//             </div>
//         </div>
//     );
// }
//
// export default App;

// import { useEffect, useState } from 'react';
// import FormSection from './components/FormSection';
//
// function App() {
//     const [darkMode, setDarkMode] = useState(false);
//
//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);
//
//     return (
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//             <div className="max-w-4xl mx-auto px-4 py-10">
//                 <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg p-8">
//                     {/* Dark Mode Toggle */}
//                     <button
//                         onClick={() => setDarkMode(!darkMode)}
//                         className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded"
//                     >
//                         {darkMode ? 'Light Mode' : 'Dark Mode'}
//                     </button>
//
//                     <h1 className="text-3xl font-bold text-center mb-8">
//                         Portfolio Website Generator
//                     </h1>
//
//                     <FormSection />
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App;

import { useEffect, useState } from 'react';
import FormSection from './components/FormSection';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg p-8 relative">

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded text-sm"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>

                <h1 className="text-3xl font-bold text-center mb-8">Portfolio Website Generator</h1>

                <FormSection />
            </div>
        </div>
    );
}

export default App;
