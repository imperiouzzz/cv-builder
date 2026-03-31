import './globals.css';

export const metadata = {
  title: 'CV Builder — Group 30 KNUST',
  description: 'Build a professional, ATS-optimized CV in minutes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}