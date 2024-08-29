import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <hr />
      <h1>Page content:</h1>
      <main>{children}</main>
    </div>
  );
}