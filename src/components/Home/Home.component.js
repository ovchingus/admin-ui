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
        label: 'Сайт организации',
        placeholder: 'Напишите название сайта, например: www.sitename.ru',
    },
    {
        label: 'ОГРН организации',
        placeholder: 'Напишите ОГРН, например: 1157746465491',
    },
    {
        label: 'Название организации',
        placeholder: 'Заполнится автоматически на основании ОГРН',
    },
    {
        label: 'Адрес доставки счетов',
        placeholder: 'Начните писать адрес а затем выберите его из списка, например 111000 Россия г. Москва Тверская 24',
    },
];

const testData2 = [
    {
        label: 'Номер расчетного счета',
        placeholder: 'Напишите номер, например: 40702810238000037635',
    },
    {
        label: 'БИК',
        placeholder: 'Напишите БИК, например: 044525225',
    },
    {
        label: 'Название банка',
        placeholder: 'Заполнится автоматически на основании БИК',
        disabled: true,
    },
    {
        label: 'ИНН банка',
        placeholder: 'Заполнится автоматически на основании БИК',
        disabled: true,
    },
    {
        label: 'КПП банка',
        placeholder: 'Заполнится автоматически на основании БИК',
        value: 'Пример',
        disabled: true,
    },
    {
        label: 'Корр. счет банка',
        placeholder: 'Заполнится автоматически на основании БИК',
        disabled: true,
    },
];

const testData3 = [
    {
        label: 'E-mail администратора',
        placeholder: 'Напишите адрес электронной почты, например: admin@ooo-uks.ru',
    },
    {
        label: 'Телефон администратора',
        placeholder: 'Напишите телефон, например +7 903 000-00-00',
    },
];

Home.propTypes = {};

export default Home;
