import React from 'react';
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
        <div className="App">
            <button className="reset-btn-corner" onClick={resetFormData}>
                Reset
            </button>
            <FormSection />
        </div>
    );
}

export default App;