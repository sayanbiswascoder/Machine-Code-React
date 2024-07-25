// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

const Header = ({textColor}) => {
  return (
    <h1 style={{color: textColor}} className='top-[10px] text-4xl font-bold'>Chai aur Code</h1>
  )
}

Header.propTypes = {
  textColor: PropTypes.string.isRequired,
};


export default Header