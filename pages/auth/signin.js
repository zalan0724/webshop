import React from 'react';
import { getProviders, signIn as signIntoProvider } from 'next-auth/react';

function Signin({ providers }) {
    return (
        <div
            className={
                'flex items-center justify-center w-screen h-screen bg-gray-100'
            }>
            <div
                className={
                    'flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4'
                }>
                <p
                    className={
                        'font-quicksand text-4xl pb-4 border-b border-gray-200 mb-4 w-full text-center'
                    }>
                    Sign In
                </p>
                {Object.values(providers).map(provider => (
                    <div key={provider.name}>
                        <button
                            onClick={() =>
                                signIntoProvider(provider.id, {
                                    callbackUrl: '/',
                                })
                            }
                            className={
                                'p-2 bg-black rounded-lg text-white font-quicksand'
                            }>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}

export default Signin;
