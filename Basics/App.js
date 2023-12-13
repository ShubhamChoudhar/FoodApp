import React from "react";
import ReactDOM from "react-dom/client";

// *********************** Without JSX *************************

// React.createElement ==> Object => HTML(DOM) React.createElement gives an object (heading1) and that object is rendered in HTML DOM.

// const heading1 = React.createElement("h1", 
// {
//     id: "title",
//     key: "h1"
// }, 
// "Heading 1 from parcel"
// );

// const heading2 = React.createElement("h1", 
// {
//     id: "title",
//     key: "h2"
// }, 
// "Heading 2"
// );

// const container = React.createElement("div", 
// {
//     id: "container"
// },
// heading2
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading2);

// *************************** With JSX ****************************
// const heading2 = (<h1 id = "title" key = "h2">Heading 2</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading2);

// *************************** React Components ****************************
// **************************** Functional Component ****************************
// Name of component starts with capital letter - It's not mandatory but good practice

 // When we are writing jsx then heading2 is a variable and we can use it in functional component in curly brackets.
// But if we are writing it as a functional component then Title can't be written in curly brackets it has to be written in <Title/> or {Title()}
const Title = () => (
    <h1 id = "title" key = "h2">
        Heading 2
    </h1>
);

const HeaderComponent = () => {
    return (
        <div>
            <Title/>
            {/* {Title()} This is also valid */}
            {/* {Title} This is also valid0*/}
            <h1>
                Namaste React Functional Component
            </h1>
            <h2>
                This is a h2 tag
            </h2>
        </div> 
    );
};

// Both HeaderComponent and HeaderComponent2 are same its just an arrow function feature
// const HeaderComponent2 = () => (
//         <div>
//             <h1>
//                 Namaste React Functional Component
//             </h1>
//             <h2>
//                 This is a h2 tag
//             </h2>
//         </div> 
//     );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent/>)