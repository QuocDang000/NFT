export const RouterErrorBoundary = () => {
  return (
    <div className="error-boundary">
      <h1>Page Not Found!</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};
