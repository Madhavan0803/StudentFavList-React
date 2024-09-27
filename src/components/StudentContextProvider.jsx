import { React, createContext, useState } from 'react'

const StudentContext = createContext()

function StudentContextProvider (data) {

    const [Student, setStudent] = useState([
        { id: 1, name: "Maddy", fav: false },
        { id: 2, name: "Allen", fav: false },
        { id: 3, name: "Rajesh", fav: false },
        { id: 4, name: "Arfath", fav: false },
        { id: 5, name: "Raghul", fav: false },
        { id: 6, name: "Praveen", fav: false }
    ])

    return (
        <StudentContext.Provider value={{ Student, setStudent }}>
            {data.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;
export { StudentContext };