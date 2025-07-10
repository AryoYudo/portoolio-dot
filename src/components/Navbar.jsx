import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollLink, scroller } from 'react-scroll';

const NavItem = ({ to, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: to } });
    } else {
      scroller.scrollTo(to, {
        duration: 300,
        smooth: true,
        offset: -50,
      });
    }
  };

  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={300}
      offset={-50}
      spy={true}
      activeClass="active-scroll"
      onClick={handleClick}
      className="nav-link ms-4 d-flex align-items-center gap-2"
      style={{ cursor: 'pointer' }}
    >
      {children}
    </ScrollLink>
  );
};

export default NavItem;