import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;
