import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 bg-gray-50">{children}</main>
    </>
  );
}
