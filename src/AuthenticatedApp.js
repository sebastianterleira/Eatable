/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile-page";

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
				<Route
				path="/profile-page"
				element={<ProfilePage/>}
				>
				</Route>
			</Routes>
		</Wrapper>
		<Footer/>
			</>
	);
}

export default AuthenticatedApp;