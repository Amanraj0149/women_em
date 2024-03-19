import React from 'react';

const Upheader = () => {
  return (
    <div id="topbar" className="my-2 align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-10 logo d-flex flex-row align-items-center">
            <div>
              <img src="https://ncwwomenhelpline.in/front/images/ncwlogo.png" style={{ maxWidth: '150px', maxHeight: '50px' }} alt="NCW Logo" />
            </div>
            <div className="px-2">
              <h3>NCW Women's HelpLine</h3>
            </div>
          </div>
          <div className="col-md-5 col-12 d-none d-md-inline-block text-end">
            <a href="https://ncwwomenhelpline.in">
              <img src="https://ncwwomenhelpline.in/front/images/ncw.png" style={{ maxWidth: '150px', maxHeight: '50px' }} alt="NCW" />
              <span style={{ display: 'inline-block', textAlign: 'left', verticalAlign: 'middle', fontWeight: 600, fontSize: '14px' }}>
                राष्ट्रीय महिला आयोग<br />
                National Commission for Women
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upheader;
