import { Outlet } from 'react-router-dom';
import Header from '../components/header/DefaultHeader';
import Footer from '../components/footer/DefaultFooter';
const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
