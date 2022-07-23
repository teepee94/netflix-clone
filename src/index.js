import React from "react";
import ReactDOM from "react-dom/client";
import "./resources/sass/site.scss"
import reportWebVitals from "./reportWebVitals";

// Styleguide Pages
import Index from "./styleguide/html/Index"
import Styleguide from "./styleguide/html/Styleguide";
import Grid from "./styleguide/html/Grid";

// Component Pages
import ComponentBlogArticle from "./html/pages/components/ComponentBlogArticle";
import ComponentListing from "./html/pages/components/ComponentListing";
import ComponentCookiebar from "./html/pages/components/ComponentCookiebar";
import ComponentFooter from "./html/pages/components/ComponentFooter";
import ComponentMasthead from "./html/pages/components/ComponentMasthead";
import ComponentNavbar from "./html/pages/components/ComponentNavbar";

// Templates
import TemplateBlogArticle from "./html/pages/templates/TemplateBlogArticle";
import TemplateBlogIndex from "./html/pages/templates/TemplateBlogIndex";
import TemplateError from "./html/pages/templates/TemplateError";
import TemplateHomepage from "./html/pages/templates/TemplateHomepage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<Index sitename="Boilerplate" styleguideTextColor="#ffff" />} />
			<Route exact path="/styleguide" element={<Styleguide styleguideTextColor="#ffff" />} />
			<Route exact path="/grid" element={<Grid styleguideTextColor="#fff" />} />
			<Route exact path="/component-blog-article" element={<ComponentBlogArticle />} />
			<Route exact path="/component-listing" element={<ComponentListing />} />
			<Route exact path="/component-cookiebar" element={<ComponentCookiebar />} />
			<Route exact path="/component-footer" element={<ComponentFooter />} />
			<Route exact path="/component-masthead" element={<ComponentMasthead />} />
			<Route exact path="/component-navbar" element={<ComponentNavbar />} />
			<Route exact path="/template-blog-article" element={<TemplateBlogArticle />} />
			<Route exact path="/template-blog-index" element={<TemplateBlogIndex />} />
			<Route exact path="/template-error" element={<TemplateError />} />
			<Route exact path="/template-homepage" element={<TemplateHomepage />} />
		</Routes>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
