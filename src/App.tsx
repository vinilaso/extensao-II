import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import PostScheduler from './components/PostScheduler';
import Analytics from './components/Analytics';
import CampaignManager from './components/CampaignManager';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in a real app, you'd validate against a backend
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  if (isLoggedIn) {
    if (currentPage === 'posts') {
      return <PostScheduler onBack={handleBackToDashboard} />;
    }
    if (currentPage === 'analytics') {
      return <Analytics onBack={handleBackToDashboard} />;
    }
    if (currentPage === 'campaigns') {
      return <CampaignManager onBack={handleBackToDashboard} />;
    }
    return <Dashboard onNavigate={handleNavigation} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <i className="fa-solid fa-cubes text-5xl text-blue-600"></i>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Bem-vindo de volta
          </h1>
          <p className="text-gray-500 text-sm">
            Entre na sua conta para continuar
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Entrar
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;