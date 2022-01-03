import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout layout__container">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
