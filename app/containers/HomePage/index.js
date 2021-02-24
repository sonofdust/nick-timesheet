/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import CustomButton from 'components/Button';
import ListBox from 'components/ListBox';

import saga from '../App/saga';
import appReducer from '../App/reducer';

import { getData } from '../App/actions';
import { makeSelectData, makeSelectLoading } from '../App/selectors';

function HomePage({ onGetData, data, loading }) {
  useInjectReducer({ key: 'appPage', reducer: appReducer });
  useInjectSaga({ key: 'appPage', saga });

  const [test, setTest] = useState(null);

  useEffect(() => {
    onGetData('token');
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <span>Hello World</span>
      <CustomButton
        onClick={() => {
          console.log('Pushed');
        }}
      >
        Push Me
      </CustomButton>

      <ListBox
        items={data}
        onClick={item => {
          console.log('clicked', item);
          setTest(item);
        }}
      />

      <div>{test}</div>
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

HomePage.propTypes = {
  onGetData: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.array,
};

export default memo(compose(withConnect)(HomePage));

// dispatch action => saga (fetch data) => dispatch action => reducer => updates the store
// component subsribes to state => gets notified => re-renders
