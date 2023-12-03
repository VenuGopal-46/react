import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
//ReactDOM.render(<Header2/>,document.getElementById("root"))


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
        <img src="logo.png" alt="logo"/>
      </div>
      < div className="new">
        <input type="text" placeholder="search here"/>
      </div>
      <div className='icon'>
        <img src="icon.png" alt="icon"/>
      </div>
    
    </component>
  )
};
ReactDOM.render(<Header6/>,document.getElementById("root"))

