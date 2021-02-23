/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';

import CustomButton from 'components/Button';
import ListBox from 'components/ListBox';

export default function HomePage() {
  const [test, setTest] = useState(null);

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
        items={['test1', 'test2', 'test3']}
        onClick={item => {
          console.log('clicked', item);
          setTest(item);
        }}
      />

      <div>{test}</div>
    </div>
  );
}
