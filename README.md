# [AlertBox Component Library](https://basemamr.github.io/alert-component-project/)
`Click for Preview`


A simple and customizable AlertBox component library built with React and SCSS. This library provides pre-styled alert boxes for different states like success, error, info, default, and warning, making it easy to show user notifications in your web application.

**Features:**

* Five Alert States: Success, Error, Info, Default, and Warning.
* Customizable: Easily modify the styles using SCSS variables and mixins.
* Responsive Design: The components adapt well to different screen sizes.
* Icon Support: Includes Lucide icons to visually represent alert states.

**Installation**

1. Clone the Repository:

    bash
   
        git clone [https://github.com/your-username/alertbox-component.git](https://github.com/your-username/alertbox-component.git)
cd alertbox-component 

3. Install Dependencies:
`npm install`


4. Start the Development Server:
`npm start`


**Usage**
To use the AlertBox component, simply import it into your project and provide the necessary props like type, icon, title, and description.

    import { CheckCircle, AlertCircle } from "lucide-react";
    import AlertBox from "./components/AlertBox";

    <AlertBox 
      type="alert-success"
      icon={<CheckCircle />}
      title="Operation Successful"
      description="The action was completed successfully without any issues."
    />;

    <AlertBox 
      type="alert-error"
      icon={<AlertCircle />}
      title="Error Occurred"
      description="An unexpected error occurred. Please try again later."
    />; 


**SCSS Customization**
Customize the alert styles using the provided SCSS mixins and variables. You can modify the colors or create your own alert styles:

    // Define custom styles for alert states
    @include alert('alert-custom', #000, #f0f0f0, #333);


**File Structure**
* src/components/AlertBox.js: The main AlertBox component.
* src/index.scss: SCSS styles, including the mixins * and default alert styles.
src/App.js: Example usage of the AlertBox component.

**Contributing**
Contributions are welcome! Please submit a pull request or open an issue for feature requests and bug reports.

**License**
This project is licensed under the MIT License.

