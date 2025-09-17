import React from "react";
import Contact from "./Contact";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Contact />);
