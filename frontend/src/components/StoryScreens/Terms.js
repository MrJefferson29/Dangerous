import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Terms.css';

const Terms = () => {
  return (
    <Styles>
    <div className="terms-container">
    <div className="privacy-policy-container">
      <h2 className="privacy-heading">Privacy Policy</h2>

      <p className="privacy-paragraph">
        Welcome to K & Q Courier Service's Privacy Policy. This policy outlines
        how we collect, use, and protect your personal information.
      </p>

          <h2>Definitions</h2>
          <p>
            <b>Service:</b> Refers to the pet transportation services provided by
            Willy's Pet Courier Service.
          </p>
          <p>
            <b>Client:</b> Refers to the pet owner or person requesting our
            services.
          </p>
          <p>
            <b>Package:</b> Refers to the goods being transported by our service.
          </p>

      <h3 className="privacy-subheading">1. Information We Collect</h3>
      <p className="privacy-paragraph">
        We may collect personal and non-personal information when you use our
        services. This information may include your name, address, contact
        details, and delivery preferences.
      </p>

      <h3 className="privacy-subheading">2. How We Use Your Information</h3>
      <p className="privacy-paragraph">
        We use your information to provide, improve, and personalize our
        services. This includes delivering parcels, communicating with you, and
        ensuring the security of your data.
      </p>

      <h3 className="privacy-subheading">3. Data Security</h3>
      <p className="privacy-paragraph">
        We take data security seriously and implement measures to protect your
        information from unauthorized access or disclosure.
      </p>

      <h3 className="privacy-subheading">4. Sharing Information</h3>
      <p className="privacy-paragraph">
        We do not share your personal information with third parties unless
        required for the delivery process or when you provide consent.
      </p>

      <h3 className="privacy-subheading">5. Your Choices</h3>
      <p className="privacy-paragraph">
        You have the right to access, correct, or delete your personal
        information. Please contact us if you have any questions or requests
        regarding your data.
      </p>

      <h3 className="privacy-subheading">6. Changes to Our Privacy Policy</h3>
      <p className="privacy-paragraph">
        We may update our privacy policy to reflect changes in our practices.
        Check our website for the latest policy version.
      </p>

      <h3 className="privacy-subheading">7. Contact Us</h3>
      <p className="privacy-paragraph">
        If you have questions or concerns about our privacy policy, please
        contact us at our customer care service.
      </p>
    </div>
      <Link to='/'><button className='butt'>Get Back Home</button></Link>
    </div>
    </Styles>

  );
};

export default Terms;

const Styles = styled.div`
.butt {
    width: 270px;
    height: 75px;
    margin: 20px;
    background: sandybrown;
    font-size: 1rem;
    font-weight: 800;
    border: 1px solid white;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  }
`;