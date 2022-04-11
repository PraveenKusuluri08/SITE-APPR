import FormBuilder from './services/FormBuilder/Forms'
import FormA from './services/Form/FormA/'
import Appraisal from './services/FormBuilder/Appraisal'
import FormB from './services/Form/FormB'
import History from './services/EmployeeManagment/components/History'
import EmployeeManagement from './services/EmployeeManagment/components/EmployeeManagement/components'
import EmployeeInvitation from './services/EmployeeManagment/components/EmployeeInvitation/'
const routes = [
    {
        path: "/formbuilder",
        component: <FormBuilder />,
        moduleName: "form builder",
    },
    {
        path: "/formbuilder/formA",
        component: <FormA />,
        moduleName: "formA",
    },
    {
        path: "/formbuilder/formB",
        component: <FormB />,
        moduleName: "formB",
    },
    {
        path: "/formbuilder/appraisal",
        component: <Appraisal />,
        moduleName: "formB",
    },
    {
        path: "/employee/management",
        component: <EmployeeManagement />,
        moduleName: "form builder",
    },
    {
        path: "/employee/invitation",
        component: <EmployeeInvitation />,
        moduleName: "form builder",
    },
    {
        path: "/history",
        component: <History />,
        moduleName: "form builder",
    },
]
export default routes