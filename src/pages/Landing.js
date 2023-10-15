import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby mlkshk yr photo booth DIY. Bodega boys readymade celiac raw
            denim cred, tacos post-ironic small batch drinking vinegar pok pok
            brunch yes plz shabby chic same.
          </p>
          <Link to="/register" type="button" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="interview" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
