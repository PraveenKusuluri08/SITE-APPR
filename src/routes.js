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
        moduleName: "form builder",//Admin
    },
    {
        path: "/formbuilder/formA",
        component: <FormA />,
        moduleName: "formA",//Admin->Textfields User->Values
    },
    {
        path: "/formbuilder/formB",
        component: <FormB />,
        moduleName: "formB",//Admin->Textfields User->Values
    },
    {
        path: "/formbuilder/appraisal",
        component: <Appraisal />,
        moduleName: "appraisal-formC",
    },
    {
        path: "/employee/management",
        component: <EmployeeManagement />,
        moduleName: "form builder",
    },
    {
        path: "/employeeinvitation",
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