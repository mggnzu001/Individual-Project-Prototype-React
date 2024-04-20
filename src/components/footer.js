import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-divctsectioninnerwrap">
        <div className="footer-details-frame">
          <div className="footer-membership">
            <span className="footer-text">
              <span className="">Membership</span>
            </span>
            <span className="footer-text02">
              <span className="">Membership Database</span>
            </span>
            <span className="footer-text04">
              <span className="">How to register</span>
            </span>
            <span className="footer-text06">
              <span className="">Application form</span>
            </span>
            <span className="footer-text08">
              <span className="">Register Online</span>
            </span>
            <span className="footer-text10">
              <span className="">Download CI Manual</span>
            </span>
          </div>
          <div className="footer-proudly-south-african">
            <span className="footer-text12">
              <span className="">Proudly South African</span>
            </span>
            <span className="footer-text14">
              <span className="">About us</span>
            </span>
            <span className="footer-text16">
              <span className="">Our Teams</span>
            </span>
            <span className="footer-text18">
              <span className="">Human Resources</span>
            </span>
            <span className="footer-text20">
              <span className="">News</span>
            </span>
            <span className="footer-text22">
              <span className="">eCommerce Partners</span>
            </span>
          </div>
          <div className="footer-reports">
            <span className="footer-text24">
              <span className="">Reports</span>
            </span>
            <span className="footer-text26">
              <span className="">Quarterly Reports</span>
            </span>
            <span className="footer-text28">
              <span className="">Annual Reports</span>
            </span>
            <span className="footer-text30">
              <span className="">Annual Performance Plan</span>
            </span>
            <span className="footer-text32">
              <span className="">Revitalising SAs</span>
            </span>
          </div>
        </div>
        <div className="footer-link">
          <span className="footer-text34">
            <span className="">Register</span>
          </span>
        </div>
        <div className="footer-divnewcolumns6312408">
          <img alt={props.sVGAlt} src={props.sVGSrc} className="footer-svg" />
          <img
            alt={props.sVGAlt1}
            src={props.sVGSrc1}
            className="footer-svg1"
          />
          <div className="footer-link1">
            <span className="footer-text36">
              <span className="">info@proudlysa.co.za</span>
            </span>
          </div>
          <div className="footer-link2">
            <img
              alt={props.sVGAlt2}
              src={props.sVGSrc2}
              className="footer-svg2"
            />
          </div>
          <div className="footer-link3">
            <img
              alt={props.sVGAlt3}
              src={props.sVGSrc3}
              className="footer-svg3"
            />
          </div>
          <div className="footer-link4">
            <img
              alt={props.sVGAlt4}
              src={props.sVGSrc4}
              className="footer-svg4"
            />
          </div>
          <div className="footer-link5">
            <img
              alt={props.sVGAlt5}
              src={props.sVGSrc5}
              className="footer-svg5"
            />
          </div>
          <div className="footer-link6">
            <img
              alt={props.sVGAlt6}
              src={props.sVGSrc6}
              className="footer-svg6"
            />
          </div>
        </div>
        <div className="footer-divnewcolumns7312408">
          <div className="footer-link7">
            <span className="footer-text38">
              <span className="">
                Copyright Proudly South Africa © 2010-2023. All rights reserved
              </span>
            </span>
          </div>
          <div className="footer-menus">
            <span className="footer-text40">
              <span className="">Terms &amp; Conditions</span>
            </span>
            <span className="footer-text42">
              <span className="">POPIA</span>
            </span>
            <span className="footer-text44">
              <span className="">Quality Policy</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  sVGSrc2: '/external/svgi188-1hbo.svg',
  sVGSrc1: '/external/svgi188-old.svg',
  sVGAlt4: 'SVGI188',
  rootClassName: '',
  sVGAlt6: 'SVGI188',
  sVGAlt1: 'SVGI188',
  sVGAlt2: 'SVGI188',
  sVGSrc6: '/external/svgi188-9jfm.svg',
  sVGAlt5: 'SVGI188',
  sVGSrc3: '/external/svgi188-yu1p.svg',
  sVGAlt3: 'SVGI188',
  sVGSrc: '/external/svgi188-kzce.svg',
  sVGAlt: 'SVGI188',
  sVGSrc4: '/external/svgi188-zwa.svg',
  sVGSrc5: '/external/svgi188-r6b.svg',
}

Footer.propTypes = {
  sVGSrc2: PropTypes.string,
  sVGSrc1: PropTypes.string,
  sVGAlt4: PropTypes.string,
  rootClassName: PropTypes.string,
  sVGAlt6: PropTypes.string,
  sVGAlt1: PropTypes.string,
  sVGAlt2: PropTypes.string,
  sVGSrc6: PropTypes.string,
  sVGAlt5: PropTypes.string,
  sVGSrc3: PropTypes.string,
  sVGAlt3: PropTypes.string,
  sVGSrc: PropTypes.string,
  sVGAlt: PropTypes.string,
  sVGSrc4: PropTypes.string,
  sVGSrc5: PropTypes.string,
}

export default Footer
