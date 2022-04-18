import FormBuilder from './services/FormBuilder/Forms'
import FormA from './services/Form/FormA/'
import Appraisal from './services/FormBuilder/Appraisal'
import FormB from './services/Form/FormB'
import History from './services/EmployeeManagment/components/History'
import EmployeeManagement from './services/EmployeeManagment/components/EmployeeManagement/components'
import EmployeeInvitation from './services/EmployeeManagment/components/EmployeeInvitation/'
import ProfileBuilderPage from './pages/ProfileBuilderPage'
import ProfilePage from './pages/ProfilePage'
import FormApage from './pages/FormApage'
import FormBpage from './pages/FormBpage'
import NavBar from './services/Dashboard/NavBar/'
const routes = [
    {
        path: "/formbuilder",
        component: <ProfileBuilderPage />,
        moduleName: "form-builder",
    },
    {
        path: "/formbuilder/formA",
        component: <FormApage />,
        moduleName: "form-a",
    },
    {
        path: "/formbuilder/formB",
        component: <FormBpage />,
        moduleName: "form-b",
    },
    {
        path: "/formbuilder/appraisal",
        component: <Appraisal />,
        moduleName: "appraisal",
    },
    {
        path: "/employeemanagement",
        component: <EmployeeManagement />,
        moduleName: "employee-management",
    },
    {
        path: "/employeeinvitation",
        component: <EmployeeInvitation />,
        moduleName: "employee-invitation",
    },
    {
        path: "/history",
        component: <History />,
        moduleName: "history",
    },
    {
        path: "/profile",
        component: <ProfilePage />,
        moduleName: "employee-services-manager"
    }


]
export default routes