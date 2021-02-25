/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import RadioOptions from 'components/RadioOptions';

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import CustomButton from 'components/Button';
// import ListBox from 'components/ListBox';
// import Hours from '../../components/Hours';
import saga from '../App/saga';
import appReducer from '../App/reducer';

import { getData } from '../App/actions';
import { makeSelectData, makeSelectLoading } from '../App/selectors';

function HomePage({ onGetData, loading, data }) {
  useInjectReducer({ key: 'appPage', reducer: appReducer });
  useInjectSaga({ key: 'appPage', saga });

  useEffect(() => {
    console.log('data:', data);
    onGetData('token');
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RadioOptions />

      {/* <Hours items={data} /> */}
      {/* <CustomButton
        onClick={() => {
          console.log('Pushed');
        }}
      >
        Push Me
      </CustomButton> */}

      {/* <ListBox
        items={data}
        onClick={item => {
//          alert(JSON.stringify(item));
          console.log('clicked', item);
          setTest(item);
        }}
      /> */}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetData: token => {
      dispatch(getData(token));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

HomePage.propTypes = {
  onGetData: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default memo(compose(withConnect)(HomePage));

// dispatch action => saga (fetch data) => dispatch action => reducer => updates the store
// component subsribes to state => gets notified => re-renders
