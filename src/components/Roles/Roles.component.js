import React, { useEffect } from 'react';

import IconButton from '../BaseComponents/IconButton'
import './Roles.scss';
import { LIST_PERMISSIONS, roles } from './mock'

function resolveAccess(permissions) {
  const { create, read, update, delete: del } = permissions;
  if (read && update && del) return 'access-edit';
  if (read && !create && !update && !del) return 'access-view';
  if (!read && !create && !update && !del) return 'access-off';
}

const Roles = (props) => {
  useEffect(() => {
    props.fetchRoles();
    props.fetchModules();
  }, []);

  return (
    <div className='Roles'>
      <div className='Roles__header'>
        <div className='Roles__header-title'>Название роли</div>
        <div className='Roles__header-modules'>
          {props.modules.map((p, i) => (
            <span key={i}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
      <div className='Roles__body'>
        {props.roles.map((r, i) => (
          <div key={i} className='Roles__row'>
            <div className='Roles__row-name'>
              <span>{r.name}</span>
            </div>
            <div className='Roles__row-buttons'>
              {props.modules.map((p, i) => (
                <IconButton
                  key={i}
                  className='Roles__button'
                  icon={resolveAccess(r.permissions[p.field])}
                />
              ))}
            </div>
            <div className='Roles__row-actions'>
              <IconButton className='Roles__button' icon='add-special' />
              <IconButton className='Roles__button' icon='remove' />
            </div>
          </div>))}
      </div>
      <div className='Roles__add'>
        <div className='Roles__add-row'>
          <IconButton className='Roles__button' icon='add' />
          <span className='Roles__row-add'>
            Добавить новую роль
          </span>
        </div>
        <div className='Roles__add-row'>
          <IconButton className='Roles__button' icon='add-special' />
          <span className='Roles__row-add'>
            Создать новую роль на основе существующей
          </span>
        </div>
      </div>
    </div>
  );
};


export default Roles;
