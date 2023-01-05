import { useAuth } from "./context/auth-context";
import React, {Suspense, lazy} from "react";
const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));


function App() {
  const { user } = useAuth();
  return (
    <>
    <Suspense fallback={<h1>Cargando ... puto</h1>}>
      {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </Suspense>
    </>
  );
}

export default App;
