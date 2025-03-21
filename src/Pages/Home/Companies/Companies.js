import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import "./companies.css";

const Companies = () => {
    return (
        <div className="brand__section">
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </div>
    );
};

export default Companies;