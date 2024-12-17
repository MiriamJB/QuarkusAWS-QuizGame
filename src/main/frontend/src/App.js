import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import QuizView from "./Components/QuizView";
import QuizCreate from "./Components/QuizCreate";
import QuizBrowse from "./Components/QuizBrowse";
import {useEffect} from "react";
import {useAuth} from "./AuthContext";
import {Authenticator} from "@aws-amplify/ui-react";


function App() {
    const {signedIn, checkSignIn} = useAuth();

    useEffect( () => {
        checkSignIn().catch(console.error);
    }, []);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={signedIn ? <Authenticator><Home/></Authenticator> : <LandingPage/>}/>
                    <Route path="/signIn" element={<Authenticator><SignIn/></Authenticator>}/>
                    <Route path="/yours" element={<Authenticator><QuizView/></Authenticator>}/>
                    <Route path="/create" element={<Authenticator><QuizCreate/></Authenticator>}/>
                    <Route path="/browse" element={<Authenticator><QuizBrowse/></Authenticator>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;