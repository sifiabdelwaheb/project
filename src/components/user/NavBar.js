import React, { useState } from 'react';
import IntlMessages from '../../helpers/IntlMessages';
import PropTypes from 'prop-types';
import registerUserAction from '../../redux/package/RegisterUserRedux';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from '../../redux/auth/authUserRedux';

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { localeOptions } from '../../constants/defaultValues';
import { setDirection } from '../../helpers/Utils';
import { changeLocale } from '../../redux/actions';
import FacebookLogin from 'react-facebook-login';

import Classes from './style.module.css';
function NavBar(props) {
  const dispatch = useDispatch();

  const [lang, setLang] = useState(
    (localStorage.getItem('currentLanguage') &&
      localStorage.getItem('currentLanguage').toUpperCase()) ||
      'EN',
  );

  function handleChangeLocale(locale, direction) {
    changeLocale(locale);
    setDirection(direction);
    setLang(locale.toUpperCase());
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  return (
    <>
      <Navbar className={Classes.TopNav} expand="md">
        <div className={'container'}>
          <NavbarBrand style={{ maxWidth: '402px' }}>
            <img
              src={require('../../assets/images/Néopolis.jpg')}
              style={{ width: '50%' }}
            />
          </NavbarBrand>
        </div>
      </Navbar>
    </>
  );
}

NavBar.propTypes = {
  loading: PropTypes.bool,
  onClickLogin: PropTypes.func.isRequired,
  onClickRegister: PropTypes.func.isRequired,
  left: PropTypes.string,
};
NavBar.defaultProps = {
  loading: null,
  onClickLogin: () => {},
  onClickRegister: () => {},
  left: '',
};
export default NavBar;
