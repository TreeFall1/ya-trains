import "./globals.css";

export const metadata = {
  title: "Я.Электрички",
  description: "Покупка билетов на электрички",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  initialScale: 1,
  width: 'device-width',
	themeColor: '#333333',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
			<head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
				{children}
			</body>
    </html>
  );
}
