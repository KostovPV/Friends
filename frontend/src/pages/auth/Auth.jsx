import {
    SignInButton,
    SignUpButton,
    UserButton,
    SignedIn,
    SignedOut
} from '@clerk/clerk-react';
import './Auth.css'; 

export const Auth = () => {
    return (
        <div className='auth-container'>
            <SignedOut>
                <div className='auth-buttons'>
                    <SignUpButton mode='modal'>
                        <button className="auth-btn">Регистрирай се</button>
                    </SignUpButton>
                    <SignInButton mode='modal'>
                        <button className="auth-btn">Влез</button>
                    </SignInButton>
                </div>
            </SignedOut>

            <SignedIn>
                <div className="user-btn">
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    );
}
