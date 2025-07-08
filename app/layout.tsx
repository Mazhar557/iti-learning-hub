import './globals.css'

export const metadata = {
  title: 'ITI Learning Hub',
  description: 'Learn and Prepare for ITI Exams with Free Study Materials and Mock Tests',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
        <footer className="text-center text-sm py-4 text-gray-500">
          &copy; {new Date().getFullYear()} ITI Learning Hub. All rights reserved.
        </footer>
      </body>
    </html>
  )
}