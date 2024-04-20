import React from 'react'

import PropTypes from 'prop-types'

import './header-signed.css'

const HeaderSigned = (props) => {
  return (
    <header
      id="signed-in"
      className={`header-signed-header-signed ${props.rootClassName} `}
    >
      <div className="header-signed-header-logo">
        <img
          alt={props.iMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1Alt}
          src={props.iMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1Src}
          className="header-signed-imag-ebabe0ecf3ccc410faf1c05a53b7ee68a1"
        />
      </div>
      <div className="header-signed-header-name">
        <span className="header-signed-text">
          <span className="">TreasureTrek</span>
        </span>
      </div>
      <div className="header-signed-header-links">
        <div className="header-signed-about-us">
          <div className="header-signed-clickable-frame">
            <span className="header-signed-text02">
              <span className="">About Us</span>
            </span>
            <img
              alt={props.eparrowdownboldAlt}
              src={props.eparrowdownboldSrc}
              className="header-signed-eparrowdownbold"
            />
          </div>
        </div>
        <div className="header-signed-rules">
          <span className="header-signed-text04">
            <span className="">Rules</span>
          </span>
        </div>
        <div className="header-signed-wishlist">
          <span className="header-signed-text06">
            <span className="">Wishlist</span>
          </span>
        </div>
        <div className="header-signed-news">
          <div className="header-signed-clickable-frame1">
            <span className="header-signed-text08">
              <span className="">{props.text}</span>
            </span>
            <img
              alt={props.eparrowdownboldAlt2}
              src={props.eparrowdownboldSrc2}
              className="header-signed-eparrowdownbold1"
            />
          </div>
        </div>
      </div>
      <button className="header-signed-burger-menubutton">
        <img
          alt={props.iconamoonmenuburgerhorizontalboldAlt}
          src={props.iconamoonmenuburgerhorizontalboldSrc}
          className="header-signed-iconamoonmenuburgerhorizontalbold"
        />
      </button>
    </header>
  )
}

HeaderSigned.defaultProps = {
  iMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1Src:
    '/external/imagebabe0ecf3ccc410faf1c05a53b7ee68a1i188-knz-200h.png',
  eparrowdownboldAlt2: 'eparrowdownboldI188',
  eparrowdownboldSrc: '/external/eparrowdownboldi188-ymsa.svg',
  iconamoonmenuburgerhorizontalboldSrc:
    '/external/iconamoonmenuburgerhorizontalboldi188-x7m.svg',
  iconamoonmenuburgerhorizontalboldAlt: 'iconamoonmenuburgerhorizontalboldI188',
  text: 'News',
  eparrowdownboldSrc2: '/external/eparrowdownboldi188-iu78.svg',
  eparrowdownboldAlt1: 'eparrowdownboldI188',
  eparrowdownboldSrc1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/730bb839-fe54-4f5a-b104-93eebb84ec8d/2f9a8ff5-e4b5-44f2-8c77-2d077b136420?org_if_sml=1678&force_format=original',
  eparrowdownboldAlt: 'eparrowdownboldI188',
  iMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1Alt:
    'IMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1I188',
  rootClassName: '',
}

HeaderSigned.propTypes = {
  iMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1Src: PropTypes.string,
  eparrowdownboldAlt2: PropTypes.string,
  eparrowdownboldSrc: PropTypes.string,
  iconamoonmenuburgerhorizontalboldSrc: PropTypes.string,
  iconamoonmenuburgerhorizontalboldAlt: PropTypes.string,
  text: PropTypes.string,
  eparrowdownboldSrc2: PropTypes.string,
  eparrowdownboldAlt1: PropTypes.string,
  eparrowdownboldSrc1: PropTypes.string,
  eparrowdownboldAlt: PropTypes.string,
  iMAGEbabe0ecf3ccc410faf1c05a53b7ee68a1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderSigned
