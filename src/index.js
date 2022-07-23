import React from "react";
import ReactDOM from "react-dom/client";
import "./resources/sass/site.scss"
import reportWebVitals from "./reportWebVitals";

// Styleguide Pages
import Index from "./styleguide/html/Index"
import Styleguide from "./styleguide/html/Styleguide";
import Grid from "./styleguide/html/Grid";

// Component Pages
import ComponentAccordion from "./html/pages/components/ComponentAccordion";
import ComponentBlockquote from "./html/pages/components/ComponentBlockquote";
import ComponentBlogArticle from "./html/pages/components/ComponentBlogArticle";
import ComponentBlogListing from "./html/pages/components/ComponentBlogListing";
import ComponentBreadcrumb from "./html/pages/components/ComponentBreadcrumb";
import ComponentCarousel from "./html/pages/components/ComponentCarousel";
import ComponentContact from "./html/pages/components/ComponentContact";
import ComponentContent from "./html/pages/components/ComponentContent";
import ComponentContentMedia from "./html/pages/components/ComponentContentMedia";
import ComponentCookiebar from "./html/pages/components/ComponentCookiebar";
import ComponentCta from "./html/pages/components/ComponentCta";
import ComponentFooter from "./html/pages/components/ComponentFooter";
import ComponentForm from "./html/pages/components/ComponentForm";
import ComponentLogos from "./html/pages/components/ComponentLogos";
import ComponentMasthead from "./html/pages/components/ComponentMasthead";
import ComponentMedia from "./html/pages/components/ComponentMedia";
import ComponentNavbar from "./html/pages/components/ComponentNavbar";
import ComponentNewsletter from "./html/pages/components/ComponentNewsletter";
import ComponentPagination from "./html/pages/components/ComponentPagination";
import ComponentTeamListing from "./html/pages/components/ComponentTeamListing";

// Templates
import TemplateAbout from "./html/pages/templates/TemplateAbout";
import TemplateBlogArticle from "./html/pages/templates/TemplateBlogArticle";
import TemplateBlogIndex from "./html/pages/templates/TemplateBlogIndex";
import TemplateContact from "./html/pages/templates/TemplateContact";
import TemplateError from "./html/pages/templates/TemplateError";
import TemplateHomepage from "./html/pages/templates/TemplateHomepage";
import TemplateTeam from "./html/pages/templates/TemplateTeam";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<Index sitename="Boilerplate" styleguideTextColor="#000000" />} />
			<Route exact path="/styleguide" element={<Styleguide styleguideTextColor="#000000" />} />
			<Route exact path="/grid" element={<Grid styleguideTextColor="#000000" />} />
			<Route exact path="/component-accordion" element={<ComponentAccordion />} />
			<Route exact path="/component-blockquote" element={<ComponentBlockquote />} />
			<Route exact path="/component-blog-article" element={<ComponentBlogArticle />} />
			<Route exact path="/component-blog-listing" element={<ComponentBlogListing />} />
			<Route exact path="/component-breadcrumb" element={<ComponentBreadcrumb />} />
			<Route exact path="/component-carousel" element={<ComponentCarousel />} />
			<Route exact path="/component-contact" element={<ComponentContact />} />
			<Route exact path="/component-content" element={<ComponentContent />} />
			<Route exact path="/component-content-media" element={<ComponentContentMedia />} />
			<Route exact path="/component-cookiebar" element={<ComponentCookiebar />} />
			<Route exact path="/component-cta" element={<ComponentCta />} />
			<Route exact path="/component-footer" element={<ComponentFooter />} />
			<Route exact path="/component-form" element={<ComponentForm />} />
			<Route exact path="/component-logos" element={<ComponentLogos />} />
			<Route exact path="/component-masthead" element={<ComponentMasthead />} />
			<Route exact path="/component-media" element={<ComponentMedia />} />
			<Route exact path="/component-navbar" element={<ComponentNavbar />} />
			<Route exact path="/component-newsletter" element={<ComponentNewsletter />} />
			<Route exact path="/component-pagination" element={<ComponentPagination />} />
			<Route exact path="/component-team-listing" element={<ComponentTeamListing />} />
			<Route exact path="/template-about" element={<TemplateAbout />} />
			<Route exact path="/template-blog-article" element={<TemplateBlogArticle />} />
			<Route exact path="/template-blog-index" element={<TemplateBlogIndex />} />
			<Route exact path="/template-contact" element={<TemplateContact />} />
			<Route exact path="/template-error" element={<TemplateError />} />
			<Route exact path="/template-homepage" element={<TemplateHomepage />} />
			<Route exact path="/template-team" element={<TemplateTeam />} />
		</Routes>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
