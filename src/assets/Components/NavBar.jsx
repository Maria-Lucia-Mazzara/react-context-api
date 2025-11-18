import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import BudgetContesto from '../contexts/BudgetContext';

function NavBar() {
    const { modalitaBudget, setModalitaBudget } = useContext(BudgetContesto);
    let testoBottone;


    if (modalitaBudget === true) {
        testoBottone = "Disattiva Modalità Budget";
    } else {
        testoBottone = "Attiva Modalità Budget";
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid px-5">
                <div className="collapse navbar-collapse show" id="navbarNav">
                    <ul className="navbar-nav flex-row gap-4">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                Chi siamo
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Prodotti
                            </NavLink>
                        </li>

                    </ul>
                    <button
                        className="btn btn-dark ms-auto"
                        onClick={() => setModalitaBudget(!modalitaBudget)}
                    >
                        {testoBottone}
                    </button>
                </div>

            </div>
        </nav>
    );
}
export default NavBar