import styled from "@emotion/styled";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePage from "./pages/profile-page";
import { getUser } from "./services/user-services";
import UpdatedProfile from "./pages/updated-profile-page";
import SearchPage from "./pages/search-page";
import React, {Suspense, lazy} from "react";
import ComponentLazyLoad from "./components/lazy-load";
const ProductPreview = lazy(() => import("./components/view-product"))

const Wrapper = styled.div`
max-width: 480px;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center
`

function AuthenticatedApp() {

	return (
		<>
		<Wrapper>
			<Routes>
			<Route index element={<SearchPage />} />
				<Route
				path="profile-page"
				element={<ProfilePage/>}
				/>
				<Route
				path="history"
				element={<ProfilePage/>}
				/>	
				<Route
				path="updated-profile"
				element={<UpdatedProfile/>}
				/>
				
				<Route
				path="products/:id"
				element={
				<Suspense fallback={<ComponentLazyLoad/>}>
					<ProductPreview/>
					</Suspense>}
				/>
			</Routes>
		</Wrapper>
		<Footer/>
		</>
	);
}

export default AuthenticatedApp;