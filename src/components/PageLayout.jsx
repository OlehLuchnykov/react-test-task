import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div className={'container'}>
      <Outlet/>
    </div>
  );
}

export default PageLayout;
