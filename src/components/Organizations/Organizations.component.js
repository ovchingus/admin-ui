import React, { useCallback, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Navigation from '../BaseComponents/Navigation';
import { Accordion, Button, Card } from 'react-bootstrap';
import cx from 'classnames';

import './Organizations.scss';
import AccordionHeader from '../BaseComponents/AccordionHeader';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import Form from '../BaseComponents/Form';

const Organizations = props => {
    const match = useRouteMatch('/organizations/:partnerId');

    const [activeTab, setActiveTab] = useState('');

    const handleChooseTab = useCallback((e, eventKey) => {
        if (eventKey === activeTab) {
            return setActiveTab();
        }

        setActiveTab(eventKey);
    }, [activeTab]);

    return (
        <div className='Organizations'>
            <Navigation
                nested
                className='Organizations__menu'
                links={testLinks}
            />
            <div className='Organizations__card'>
                {(match && match.params.partnerId) && (
                    <React.Fragment>
                        <Form
                            className='margin-top-2'
                            data={testData3}
                        />
                        <Accordion activeKey={activeTab} className='Organizations__card__accordion'>
                            <div>
                                <AccordionHeader eventKey="0" onClick={handleChooseTab} isActive={activeTab === '0'}>
                                    <img
                                        src={ArrowDown} alt='drop-arrow'
                                        className={cx('transition-rotate', { ['rotate-90-back']: activeTab !== '0' })}
                                    />
                                    Банковские реквезиты
                                </AccordionHeader>
                                <Accordion.Collapse eventKey="0">
                                    <div className='Organizations__card__accordion-item'>
                                        <Form
                                            className='full-width-form'
                                            data={testData}
                                        />
                                        <Form
                                            className='full-width-form margin-top-28'
                                            data={testData2}
                                        />
                                    </div>
                                </Accordion.Collapse>
                            </div>
                            <div>
                                <AccordionHeader eventKey="1" onClick={handleChooseTab} isActive={activeTab === '1'}>
                                    <img
                                        src={ArrowDown}
                                        alt='drop-arrow'
                                        className={cx('transition-rotate', { ['rotate-90-back']: activeTab !== '1' })}
                                    />
                                    Лицензии, счета, оплаты
                                </AccordionHeader>
                                <Accordion.Collapse eventKey="1">
                                    <div className='Organizations__card__accordion-item'>Лицензии, счета, оплаты</div>
                                </Accordion.Collapse>
                            </div>
                            <div>
                                <AccordionHeader eventKey="2" onClick={handleChooseTab} isActive={activeTab === '2'}>
                                    <img
                                        src={ArrowDown}
                                        alt='drop-arrow'
                                        className={cx('transition-rotate', { ['rotate-90-back']: activeTab !== '2' })}
                                    />
                                    Диалоги
                                </AccordionHeader>
                                <Accordion.Collapse eventKey="2">
                                    <div className='Organizations__card__accordion-item'>Диалоги</div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </React.Fragment>
                )}

            </div>
        </div>
    );
};

const testLinks = [
    {
        label: 'Партнер 1',
        url: '1',
    },
    {
        label: 'Партнер 2',
        url: '2',
    },
];

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
        label: 'e-mail администратора',
        placeholder: 'Напишите название сайта, например: email@mail.ru',
        value: 'admin@ooo-uks.ru',
    },
];

Organizations.propTypes = {};

export default Organizations;
