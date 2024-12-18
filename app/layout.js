import ConfigureAmplify from "@/lib/amplify-config";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplify />
        {children}
      </body>
    </html>
  );
}
