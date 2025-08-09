export default function DashboardLayout({
  children,
  notifications,
  revenue,
  usersanalytics,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  usersanalytics: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return (
    <html lang="en">
      <body>
        {isLoggedIn ? (
          <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
              {/* first container */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{usersanalytics}</div>
                <div>{revenue}</div>
              </div>
              {/* second container */}
              <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
          </>
        ) : (
          login
        )}
      </body>
    </html>
  );
}
