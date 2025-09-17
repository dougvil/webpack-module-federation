import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";

export const App = () => {
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/contact" className="navbar__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContactPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};
