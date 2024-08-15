import React, { useState, FormEvent } from "react";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitting:", { username, password, isLogin });
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <div className='px-8 py-6 mt-4 text-left bg-white dark:bg-gray-800 shadow-lg'>
        <h3 className='text-2xl font-bold text-center text-gray-800 dark:text-white'>
          {isLogin ? "Login" : "Sign up"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <div>
              <label
                className='block text-gray-700 dark:text-gray-200'
                htmlFor='username'>
                Username
              </label>
              <input
                type='text'
                placeholder='Username'
                id='username'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='mt-4'>
              <label
                className='block text-gray-700 dark:text-gray-200'
                htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                placeholder='Password'
                id='password'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-baseline justify-between'>
              <button
                className='px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                type='submit'>
                {isLogin ? "Login" : "Sign up"}
              </button>
              <a
                href='#'
                className='text-sm text-blue-600 hover:underline'
                onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Login"}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
