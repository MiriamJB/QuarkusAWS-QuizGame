import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "./AuthContext";
import {Authenticator} from "@aws-amplify/ui-react";
import Layout from "./Components/Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/SignIn";
import QuizView from "./Components/Pages/QuizView";
import QuizCreate from "./Components/Pages/QuizCreate";
import QuizBrowse from "./Components/Pages/QuizBrowse";
import QuizDetails from "./Components/Pages/QuizDetails";
import QuizEdit from "./Components/Pages/QuizEdit";

function App() {
    const {signedIn, checkSignIn, checkUsername} = useAuth();

    useEffect( () => {
        checkSignIn().catch(console.error);
        checkUsername().catch(console.error);
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
                    <Route path="/browse/:quizId" element={<Authenticator><QuizDetails/></Authenticator>}/>
                    <Route path="/edit/:quizId" element={<Authenticator><QuizEdit/></Authenticator>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;