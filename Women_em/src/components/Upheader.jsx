import React from 'react';
import './Upheader.css';

const Upheader = () => {
  return (
    // <div id="topbar" className="my-2 align-items-center">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-7 col-10 logo d-flex flex-row align-items-center">
    //         <div>
    //           <img src="https://ncwwomenhelpline.in/front/images/ncwlogo.png" style={{ maxWidth: '150px', maxHeight: '50px' }} alt="NCW Logo" />
    //         </div>
    //         <div className="px-2">
    //           <h3>NCW Women's HelpLine</h3>
    //         </div>
    //       </div>
    //       <div className="col-md-5 col-12 d-none d-md-inline-block text-end">
    //         <a href="https://ncwwomenhelpline.in">
    //           <img src="https://ncwwomenhelpline.in/front/images/ncw.png" style={{ maxWidth: '150px', maxHeight: '50px' }} alt="NCW" />
    //           <span style={{ display: 'inline-block', textAlign: 'left', verticalAlign: 'middle', fontWeight: 600, fontSize: '14px' }}>
    //             राष्ट्रीय महिला आयोग<br />
    //             National Commission for Women
    //           </span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <section className="wrapper header-wrapper">
      <div className="container header-container">
        
   

        <div className="left-logo">
          <img alt="Ministry of Women Child Development" src="https://wcd.nic.in/sites/all/themes/cmf/images/left-logo.png" />
          </div>

        <div  className="logo header__logo" id="logo">

            <div><img className="national_emblem" src="https://wcd.nic.in/sites/all/themes/cmf/images/emblem-dark.png" alt="national emblem" /></div>
            <div><span>महिला एवं बाल विकास मंत्रालय </span></div>
            <div><span> Ministry of Women &amp; Child Development</span></div>
        </div>

        <div className="right-logo">
          <a href="https://wcd.nic.in/bbbp-schemes/" target="_blank" title="External link that will open in a new window">
            <img alt="Beti Bachao" src="https://wcd.nic.in/sites/all/themes/cmf/images/beti-bachao-logo2.png" />
          </a>
        </div>

        <a className="toggle-nav-bar" href="javascript:void(0);">
          <span className="menu-icon"></span>
          <span className="menu-text">Menu</span>
        </a>
      </div>
    </section>
  );
};

export default Upheader;
