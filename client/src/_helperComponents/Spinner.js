import React from 'react'
import { Spin } from 'antd';

const Spinner = () => {
    return (
        <div className="mx-auto w-1/5 text-center m-64">
            <Spin size="large"/>
        </div>
    )
}

export default Spinner;