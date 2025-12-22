import "./globals.css";

export const metadata = {
  title: "River Run Ranch Animal Rescue",
  description: "Rescuing puppies and kittens in the Texas Hill Country",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--green-dark)",
            color: "var(--cream)",
            padding: "1rem 2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src="/images/riverrunranch.png"
              alt="River Run Ranch Logo"
              style={{ height: "60px", width: "auto" }}
            />
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
              River Run Ranch Animal Rescue
            </h1>
          </div>

          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/adopt">Adopt</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main style={{ padding: "2rem" }}>{children}</main>

        <footer
          style={{
            background: "var(--green-dark)",
            color: "var(--cream)",
            padding: "1rem 2rem",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <p>© 2025 River Run Ranch and Animal Rescue • 501(c)(3)</p>
        </footer>
      </body>
    </html>
  );
}
