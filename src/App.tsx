import { CheckCircle, AlertCircle, Info, Ban, AlertTriangle } from "lucide-react"
import AlertBox from "./components/AlertBox"
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="boxes">


      <AlertBox 
    type="alert-success"
    icon={<CheckCircle />}
    title="Operation Successful"
    description="The action was completed successfully without any issues. Feel free to proceed with your next steps or return to the dashboard."
/>

<AlertBox 
    type="alert-error"
    icon={<AlertCircle />}
    title="Error Occurred"
    description="An unexpected error occurred while processing your request. Please try again later or contact support if the issue continues."
/>

<AlertBox 
    type="alert-info"
    icon={<Info />}
    title="Information"
    description="Please note that some of the features are currently under maintenance. We are working to restore them as soon as possible."
/>

<AlertBox 
    type="alert-default"
    icon={<Ban />}
    title="Access Denied"
    description="You do not have the necessary permissions to access this section. Please contact the administrator for more information."
/>

<AlertBox 
    type="alert-warning"
    icon={<AlertTriangle />}
    title="Warning"
    description="Caution is advised! Proceeding further may lead to data loss or unexpected behavior. Ensure you have backed up important information."
/>

      </div>
    </div>
  )
}

export default App