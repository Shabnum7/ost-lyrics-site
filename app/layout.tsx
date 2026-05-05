export const metadata = {
  title: "OST Lyrics Meaning",
  description: "Pakistani drama OST lyrics meaning and explanation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google verification tag */}
        <meta
          name="google-site-verification"
          content="Cw7Qm4jUeYeE5xJV_1DbnTcPw-jS7lR9WyQixdL4FRA"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "Arial" }}>

        {/* 🔥 NAVBAR */}
        <nav style={{
          background: "#4F46E5",
          padding: "15px",
          color: "white"
        }}>
          <a href="/" style={{ color: "white", marginRight: "20px" }}>
            Home
          </a>
          <a href="/sirf-shabana-ost" style={{ color: "white" }}>
            Songs
          </a>
        </nav>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>

      </body>
    </html>
  );
}