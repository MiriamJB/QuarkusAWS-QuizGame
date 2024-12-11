import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./Navbar";

function AuthLayout({ signOut, user, children }) {
    return (
        <>
            <Navbar signOut={signOut} user={user}/>
            <main>{children}</main>
        </>
    );
}

export default withAuthenticator(AuthLayout);
