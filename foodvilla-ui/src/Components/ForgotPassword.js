import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isPasswordResetSent, setIsPasswordResetSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement logic to send a password reset email to the backend
    // using the provided email address
    console.log('Email:', email);

    // Assuming the password reset link is successfully sent
    setIsPasswordResetSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {isPasswordResetSent ? (
        <ChangePasswordForm />
      ) : (
        <form className="bg-white p-8 rounded-md shadow-md max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send password reset link
          </button>
        </form>
      )}
    </div>
  );
};

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement logic to change the password
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);

    // Reset the state after changing the password
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <form className="bg-white p-8 rounded-md shadow-md max-w-md" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
        <input
          type="password"
          id="newPassword"
          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
        <input
          type="password"
          id="confirmNewPassword"
          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Change Password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
