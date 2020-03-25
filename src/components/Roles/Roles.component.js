import React, { useEffect, useState, useRef } from 'react';

import IconButton from '../BaseComponents/IconButton'
import Input from '../BaseComponents/Input'
import './Roles.scss';
import { LIST_PERMISSIONS, roles } from './mock'

function resolveAccess(permissions) {
  const { create: c, read: r, update: u, delete: d } = permissions;
  if (c && r && u && d) return 'access-edit';
  if (!c && r && !u && !d) return 'access-view';
  if (!c && !r && !u && !d) return 'access-off';
}

const Roles = (props) => {
  useEffect(() => {
    props.fetchRoles();
    props.fetchModules();
  }, []);

  const [roleName, setRoleName] = useState('')

  const handleChangePermission = (role, module) => props.setPermission({ role, module });
  const handleRemoveRole = (role) => props.removeRole({ role });
  const handleAddRole = (role) => props.addRole({ role: { ...role, name: '', } })
  const handleRenameRole = (role, newName) => {
    props.updateRole({
      role, newRole: { ...role, name: newName }
    })
    setRoleName('')
  }

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
              {r.name === '' ? (
                <Input
                  autoFocus
                  value={roleName}
                  onChange={setRoleName}
                  onBlur={() => handleRenameRole(r, roleName)}
                />
              ) : (
                  <span>{r.name}</span>
                )}
            </div>
            <div className='Roles__row-buttons'>
              {props.modules.map((p, i) => (
                <IconButton
                  key={i}
                  className='Roles__button'
                  icon={resolveAccess(r.permissions[p.field])}
                  onClick={() => handleChangePermission(r.name, p.field)}
                />
              ))}
            </div>
            <div className='Roles__row-actions'>
              <IconButton
                onClick={() => handleAddRole(r)}
                className='Roles__button'
                icon='add-special'
              />
              <IconButton
                onClick={() => handleRemoveRole(r.name)}
                className='Roles__button'
                icon='remove'
              />
            </div>
          </div>))}
      </div>
      <div className='Roles__add'>
        <div className='Roles__add-row' onClick={() => alert('daw')}>
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
