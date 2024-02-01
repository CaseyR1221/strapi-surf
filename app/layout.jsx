import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import '../sass/main.scss';

export const metadata = {
  title: "Welcome",
  description: "Created By: Casey Rowlands",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
