import React, { useState } from 'react'; 
import './footer.css';
import PrivacyPolicy from '../PrivacyPolicy';
import TermsOfService from '../TermsOfService';

function Footer() {
  // State to control modal visibility
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Handlers to open and close modals
  const openTermsModal = () => setIsTermsOpen(true);
  const closeTermsModal = () => setIsTermsOpen(false);
  
  const openPrivacyModal = () => setIsPrivacyOpen(true);
  const closePrivacyModal = () => setIsPrivacyOpen(false);

  // Handler to close the modal when clicking outside
  const handleClickOutside = (event) => {
    if (event.target.className === 'modal') {
      closeTermsModal();
      closePrivacyModal();
    }
  };

  return (
    <div className='footer'>
      <p>© 2024 Pena Finance Corp. All rights reserved.</p>
      <ul>
        <li onClick={openTermsModal}>Term of Services</li>
        <li onClick={openPrivacyModal}>Privacy Policy</li>
      </ul>

      {/* Terms of Services Modal */}
      {isTermsOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <span className="close" onClick={closeTermsModal}>&times;</span>
            <TermsOfService />
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <span className="close" onClick={closePrivacyModal}>&times;</span>
            <PrivacyPolicy />
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
