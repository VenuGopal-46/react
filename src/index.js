import React from 'react';
import ReactDOM from 'react-dom';
import reactlogo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//create a nested Element using React.createElement(h1,h2,h3 inside a div with class "title")
const Header = React.createElement(
    "div",{className: "title", key:"title"},
    [React.createElement("h1",{key:"h1"},"created using h1 tag"),
     React.createElement("h2",{key:"h2"},"created using h2 tag"),
     React.createElement("h1",{key:"h1"},"created using h1 tag"),
    ]);
  //ReactDOM.render(Header,document.getElementById("root"))
 
//create the same element using jsx
const Header1 = (
    <div className="title">
      <h1>"This is using by jsx"</h1>
      <h2>"this is using bu jsx"</h2>
      <h4>"this is using by jsx"</h4>
    </div>
  );
  //ReactDOM.render(Header1,document.getElementById("root"))

//create a functional component of the same with the jsx  
const Header2 = () => {
  return (
      <div className="title">
         <h1>"This is using by functionalcomponent by jsx"</h1>
         <h2>"This is using by functionalcomponent by jsx"</h2>
         <h3>"This is using by functionalcomponent by jsx"</h3>
      </div>
  )
};
ReactDOM.render(<Header2/>,document.getElementById("root"))


//pass attributes into the tag in jsx

const HEADER3 = (
  <div className="title">
    <h1 style={{color:"orange"}}>"this is the header using attributes with jsx"</h1>
    <h2 style={{color:"blue"}}>"this is the header using attributes with jsx"</h2>
    <h3 style={{color:"yellow"}}>"this is the header using attributes with jsx"</h3>
  </div>
)

//ReactDOM.render(HEADER3,document.getElementById("root"))

//composition of component(add a component inside another)

const Header4 = () => {
  return (
    <h1>"one component inside another component"</h1>
  )
};
//ReactDOM.render(<Header4></Header4>,document.getElementById("root"))

const TitleComponent = () =><h1>TitleComponent</h1>;

const Header5 = () => {
  return (
    <div className="title" key="title">
      <TitleComponent/>
      <TitleComponent></TitleComponent>
    </div>
  )
};

//ReactDOM.render(<Header5/>,document.getElementById("root"))

// create a header component from scratch using functional component with jsx

const Header6 = () => {
  return (
    <component className="component">
      <div className="logo">
      <img src={reactlogo} height="30px" width="40x"/>
      </div>
      <div className="new">
        <input type="text" placeholder="search here"/>
      </div>
      <div className='icon'>
         <svg xmlns="http://www.w3.org/2000/svg" height="100px" width="50px" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
      </div>
    
    </component>
  )
};
ReactDOM.render(<Header6/>,document.getElementById("root"))

