import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .spinner {
          border: 8px solid rgba(255, 255, 255, 0.3);
          border-left-color: blue;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;