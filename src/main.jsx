import React from "react";
import reactdom from "react-dom/client"
import "./index.css"
import App from "./App"


const root = reactdom.createRoot(document.getElementById("root"))

root.render(
  <>
  <App/>
  </>
)
