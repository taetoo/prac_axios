// import React, { Component } from 'react'
// import './App.css';
// export default class App extends Component {
//   state = {
//     testbody : "",
//     testbody1 : ""
//   }

//   handleChange =(e)=>{
//     this.setState({
//       [e.target.name] : e.target.value,
//     });
//   }

// submitId = ()=>{
//     const post ={
//       test : this.state.testbody,
//     };
   
//     fetch("http://localhost:3001/idplz", {
//       method : "post", // 통신방법
//       headers : {
//         "content-type" : "application/json",
//       },
//       body : JSON.stringify(post),
//     })
//     .then((res)=>res.json())
//     .then((json)=>{
//       this.setState({
//         testbody : json.text,
//       });
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input onChange={this.handleChange} name ="testbody"/>
//         <button onClick = {this.submitId}>Submit</button>
//         <h1>{this.state.testbody}</h1>
//         <p>{this.state.testbody1}</p>
//       </div>
//     )
//   }
// }

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/name-list')
            .then(response => {
                setName(response.data)
                console.log(response.data);
            });
    }, []);
    return (
      <h2>User</h2>
    );

}

export default App;