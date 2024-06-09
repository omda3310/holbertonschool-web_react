import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import FirstContext from '../App/AppContext';

function Footer() {
  const { user } = React.useContext(FirstContext);

  return (
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        {user.isLoggedIn && (
          <p><a href='#'>Contact us</a></p>
        )}
      </div>
  );
}

export default Footer;
