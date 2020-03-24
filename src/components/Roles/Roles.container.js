import { connect } from 'react-redux';

import Roles from './Roles.component';
import { rolesSelectors, modulesSelectors } from '../../store/selectors';
import { rolesActions, modulesActions } from '../../store/actions';


const mapStateToProps = (state) => {
    return ({
        roles: rolesSelectors.roles(state),
        modules: modulesSelectors.modules(state)
    });
};

const mapDispatchToProps = {
    fetchRoles: rolesActions.fetchRoles,
    fetchModules: modulesActions.fetchModules
};

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
