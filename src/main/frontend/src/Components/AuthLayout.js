import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./Navbar";

// This component is a layout component that wraps the Navbar and the main content of the page
// controls the auth state of the user
function AuthLayout({ signOut, user, children }) {
    return (
        <>
            <Navbar signOut={signOut} user={user}/>
            <main>{children}</main>
        </>
    );
}

export default withAuthenticator(AuthLayout);
