import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-primary">Page not found</h1>
        <p className="mt-3 text-light/75">The page you are looking for is not available.</p>
        <Button to="/" className="mt-7">Return Home</Button>
      </div>
    </section>
  );
}
