import {useEffect} from "react";

function SignIn () {
    useEffect(() => {
        window.location.href = "/";
    }, []);

    return (
        <div>Signing in...</div>
    );
}

export default SignIn;