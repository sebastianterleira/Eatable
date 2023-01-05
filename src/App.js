import { useAuth } from "./context/auth-context";
import React, {Suspense, lazy} from "react";
import ComponentLazyLoad from "./components/lazy-load";
const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));


function App() {
  const { user } = useAuth();
  return (
    <>
    <Suspense fallback={<ComponentLazyLoad/>}>
      {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </Suspense>
    </>
  );
}

export default App;
