import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormSection from './components/FormSection';

const FORM_STORAGE_KEY = "portfolioFormData";
const FILES_STORAGE_KEY = "portfolioFormFiles";

function App() {
    const resetFormData = () => {
        localStorage.removeItem(FORM_STORAGE_KEY);
        localStorage.removeItem(FILES_STORAGE_KEY);
        window.location.reload();
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Landing Page Route */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Portfolio Generator Form Route */}
                    <Route
                        path="/generator"
                        element={
                            <>
                                <button className="reset-btn-corner" onClick={resetFormData}>
                                    Reset
                                </button>
                                <FormSection />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;