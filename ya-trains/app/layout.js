import "./globals.css";

export const metadata = {
  title: "Я.Электрички",
  description: "Покупка билетов на электрички",
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
