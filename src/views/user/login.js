import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import NavBar from '../../components/user/NavBar';
import { changeLocale } from '../../redux/actions';
import { Navbar, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import loginForms from '../../common/authUser';
import contactUsForms from '../../common/contactUs';
import Classes from './style.module.css';
import IntlMessages from '../../helpers/IntlMessages';
import { getParameterByName, randomString } from '../../helpers/Utils';
import { injectIntl } from 'react-intl';
import Card from '../../components/user/Card';
import registerUserAction from '../../redux/package/RegisterUserRedux';
import InputPattern from '../../common/inputPattern';
import Hoc from '../../hoc/wrapperInputs';
import loginAction from '../../redux/auth/authUserRedux';
import Particles from 'react-particles-js';
import SimilarityForm from '../../common/Similarity';

const Wrapper = Hoc(InputPattern);
function Login(props) {
  const dispatch = useDispatch();

  const [clicked, setClick] = useState(false);
  const [clicked1, setClick1] = useState(false);
  const [isValid, setValidation] = useState(false);
  const [forms, setForm] = useState(loginForms());
  const [contactUsform, setContactForm] = useState(contactUsForms().contactUs);

  const redux = useSelector((state) => state);
  const [similarityUsform, setSimilarityForm] = useState(
    SimilarityForm().similarity,
  );

  return (
    <Fragment>
      <NavBar />

      <div className={`${Classes.Container}`}>
        <div className={Classes.Home_Container}>
          <div className={Classes.Similarity_Container}>
            <Card
              xs="12"
              sm="12"
              md="22"
              package={' Estimer Votre Bien'}
              withImgCard={false}
              Card={Classes.Card}
              Col={Classes.Col}
            >
              <div className={Classes.Cardbody}>
                <Wrapper
                  // onClick={() => console.log(onSendForm(contactUsform))}
                  form={similarityUsform}
                  textButton="Connexion"
                  loading={redux.RegisterUser.fetching}
                  clicked={clicked1}
                  setClick={setClick1}
                  error={redux.RegisterUser.error}
                  loaded={redux.RegisterUser.loaded}
                  setSimilarityForm={setSimilarityForm}
                  setValidation={setValidation}
                  // errorMessage={redux.contactUs.response}
                />
              </div>

              <Button
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: '#da2323',
                  fontWeight: 'bold',
                  height: '40px',
                  marginLeft: '50px',
                }}
              >
                <IntlMessages id="pages.predict" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

export default injectIntl(Login);
