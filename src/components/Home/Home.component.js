import React from 'react';
import Form from '../BaseComponents/Form';

import './Home.scss';

const Home = props => {
    return (
        <div className='Home'>
            <Form
                className='Home__form'
                data={testData}
            />
            <Form
                className='Home__form'
                data={testData2}
            />
            <Form
                className='Home__form'
                data={testData3}
            />
        </div>
    );
};

const testData = [
    {
        label: 'Первая',
        value: 'значение',
    },
    {
        label: 'Первая',
        value: 'значение',
    },
    {
        label: 'Вторая',
        value: 'значение',
    },
    {
        label: 'Первая',
        value: 'значение',
    },
    {
        label: 'Первая',
        value: 'значение',
    },
    {
        label: 'Вторая',
        value: 'значение',
    },
    {
        label: 'Вторая',
        value: 'значение',
    }
];

const testData2 = [
    {
        label: 'Первая',
        value: 'значение',
    },
    {
        label: 'Первая',
        value: 'значение',
    },
    {
        label: 'Вторая',
        value: 'значение',
    },
];

const testData3 = [
    {
        label: 'Первая',
        value: 'значение',
    }
];

Home.propTypes = {};

export default Home;
