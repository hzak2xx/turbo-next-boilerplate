import { AuthHandler } from "@/container/AuthHandler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AuthHandler>{children}</AuthHandler>
      </body>
    </html>
  );
}
