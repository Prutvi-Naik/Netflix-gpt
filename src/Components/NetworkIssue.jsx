const NetworkIssue = ({ isLoad}) => {
  if (!isLoad) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-full max-w-md p-6 mx-4 bg-gray-900 rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-3 bg-red-900 rounded-full bg-opacity-20">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-white">Connection Problem</h3>
          <p className="text-center text-gray-300">
            We couldn't load the movie data. Please try on another internet
            connection.
          </p>

          <div className="flex w-full gap-3 pt-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 px-4 py-2 font-medium text-gray-300 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkIssue;
