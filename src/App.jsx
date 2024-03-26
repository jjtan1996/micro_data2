import React, { useState } from "react";
import ReactDOM from "react-dom";
import StudentForm from "studentapp1/StudentForm";  // Adjust the import based on your setup

const App = () => {
    const [studentData, setStudentData] = useState(null);

    const handleFormSubmit = (formData) => {
        setStudentData(formData);
    };

    return (
        <>
            <h1>Student App 2</h1>
            <StudentForm onSubmit={handleFormSubmit} />
            {studentData && (
                <div>
                    <h2>Submitted Data</h2>
                    {Object.entries(studentData).map(([key, value]) => (
                        <p key={key}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</p>
                    ))}
                </div>
            )}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
