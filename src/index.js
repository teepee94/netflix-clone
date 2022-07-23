import React from "react";
import ReactDOM from "react-dom/client";
import "./resources/sass/site.scss"

// Templates
import TemplateHomepage from "./html/pages/templates/TemplateHomepage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<TemplateHomepage />} />
		</Routes>
	</Router>
);
