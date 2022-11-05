import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ActivitiesList from "./Components/Activities/ActivitiesList";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/create-activity" element={<ActivitiesForm />} />
					<Route path="/create-category" element={<CategoriesForm />} />
					<Route path="/create-news" element={<NewsForm />} />
					<Route path="/backoffice/create-slide" element={<SlidesForm />} />
					<Route path="/create-testimonials" element={<TestimonialForm />} />
					<Route path="/create-user" element={<UserForm />} />
					<Route path="/create-member" element={<MembersForm />} />
					<Route path="/create-project" element={<ProjectsForm />} />
					<Route path="/school-campaign" element={<SchoolCampaign />} />
					<Route path="/toys-campaign" element={<ToysCampaign />} />
					<Route path="/actividades" element={<ActivitiesList />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
