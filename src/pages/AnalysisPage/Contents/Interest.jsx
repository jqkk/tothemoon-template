import React from 'react';
import { useSelector } from 'react-redux';
import { InterestChart } from '../../../components';

function Interest() {
  const interest = useSelector((state) => state.analysis.interest);
  return <InterestChart datasets={interest} />;
}

export default Interest;
