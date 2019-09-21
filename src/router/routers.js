import Add from '../views/add/add'
import Adding from '../views/adding/Adding';
import ListV from '../views/list/ListV';
export default [{
        path: '/add',
        component: Add
    },
    {
        path: '/adding',
        component: Adding
    },
    {
        path: '/listV',
        component: ListV
    },
    {
        path: '/',
        redirect: '/add'
    }
]