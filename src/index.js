/**
=========================================================
* DataLake Frontend - v0.1.0
=========================================================

* Copyright 2023 Arqmind (https://www.arqmind.com)

 =========================================================

*/
"use strict";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard React Context Provider
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
