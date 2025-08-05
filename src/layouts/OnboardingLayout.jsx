import OnboardingFooter from '../components/footer/OnboardingFooter';
import OnboardingHeader from '../components/header/OnboardingHeader';
import { Outlet } from 'react-router-dom';

const OnboardingLayout = () => {
  return (
    <>
      <OnboardingHeader />
      <Outlet />
      <OnboardingFooter />
    </>
  );
};

export default OnboardingLayout;
