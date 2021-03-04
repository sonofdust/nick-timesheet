/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import RadioOptions from 'components/RadioOptions';
import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import CustomButton from 'components/Button';
// import ListBox from 'components/ListBox';
import Hours from '../../components/Hours';
import Comments from '../../components/comments';
import Project from '../../components/project';
import TaskInfo from '../../components/taskinfo';
import FcoQpms from '../../components/fcoqpms';

import saga from '../App/saga';
import appReducer from '../App/reducer';

import { getData } from '../App/actions';
import { makeSelectData, makeSelectLoading } from '../App/selectors';

function HomePage({ onGetData, loading, data }) {
  useInjectReducer({ key: 'appPage', reducer: appReducer });
  useInjectSaga({ key: 'appPage', saga });

  useEffect(() => {
    onGetData('token');
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const [display, setDisplay] = useState('HOURS');
  // Move this to another folder in which you keep track of enums or constants.
  const Tabs = {
    Hours: 'HOURS',
    FCOQPMS: 'FCOQPMS',
    ClientData: 'CLIENTDATA',
    Comments: 'COMMENTS',
    TSCorr: 'TSCORR',
    Project: 'PROJECT',
    TaskInfo: 'TASKINFO',
  };

  const getTab = () => {
    switch (display) {
      case Tabs.Hours:
        return <Hours items={data} />;
      case Tabs.FCOQPMS:
        return <FcoQpms items={data} />;
      case Tabs.ClientData:
        return (
          <div className="container">
            <div className="row">
              <label>WAITING FOR REQUIREMENTS.</label>
            </div>
          </div>
        );
      case Tabs.Comments:
        return <Comments items={data} />;
      case Tabs.TSCorr:
      case Tabs.ClientData:
        return (
          <div className="container">
            <div className="row">
              <label>WAITING FOR REQUIREMENTS.</label>
            </div>
          </div>
        );
      case Tabs.Project:
        return <Project items={data} />;
      case Tabs.TaskInfo:
        return <TaskInfo items={data} />;
      default:
        return <Hours items={data} />;
    }
  };

  return (
    <div className="screencenter">
      {/* <pre>{JSON.stringify(data)}</pre> */}
      <RadioOptions screen={tag => setDisplay(tag)} />
      {getTab()}
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
