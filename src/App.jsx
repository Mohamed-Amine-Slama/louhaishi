import React, { useState, Suspense } from 'react';
import Login from './components/Login';

// Lazy load Dashboard for better initial load performance
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (userData) => {
        try {
            setIsLoading(true);
            setError(null);
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            setIsAuthenticated(true);
            setUserProfile({
                name: userData.email.split('@')[0],
                email: userData.email,
                image: '👤'
            });
        } catch (err) {
            setError('Authentication failed. Please try again.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserProfile(null);
    };

    // Loading Fallback Component
    const LoadingFallback = () => (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(to bottom, #000, #696969)',
            color: 'white'
        }}>
            Loading...
        </div>
    );

    return (
        <div className="app">
            {isAuthenticated ? (
                <Suspense fallback={<LoadingFallback />}>
                    <Dashboard
                        userProfile={userProfile}
                        onLogout={handleLogout}
                    />
                </Suspense>
            ) : (
                <Login 
                    onLogin={handleLogin} 
                    isLoading={isLoading}
                    error={error}
                />
            )}
        </div>
    );
}

export default App;