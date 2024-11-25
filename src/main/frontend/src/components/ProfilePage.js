import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                setUser(currentUser);
            } catch (error) {
                console.error("Error fetching user: ", error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="container">
            <h1>Profile Page</h1>
            {user ? (
                <div style={styles.profileBox}>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.attributes.email}</p>
                    <p><strong>Phone:</strong> {user.attributes.phone_number || "Not provided"}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

const styles = {
    container: { textAlign: 'center', marginTop: '5rem' },
    profileBox: { display: 'inline-block', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }
};

export default ProfilePage;
