
import { createContext, useState } from "react";

const BudgetContesto = createContext();

export function BudgetProvider({ children }) {

    const [modalitaBudget, setModalitaBudget] = useState(false);

    return (
        <BudgetContesto.Provider value={{ modalitaBudget, setModalitaBudget }}>
            {children}
        </BudgetContesto.Provider>
    );
}

export default BudgetContesto;



