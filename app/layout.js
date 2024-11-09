import "./globals.css";


export const metadata = {
  title: "Я.Электрички",
  description: "Покупка билетов на электрички",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
				{children}
			</body>
    </html>
  );
}
