import React from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';

export default class FetchEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: null,
    };
  }
  componentDidMount() {
    // fetch(`/api/employees?page=1`)
    //   .then(res =>res.json())
    //   .then(employees =>{
    //     this.setState({
    //       employees,
    //     })
    //     return Promise.reject('oh, no!');    
    //   })
    //   .catch(error=>{
    //     console.log(error);
    //     this.setState({error});
    //   })

    // Example 1
    // fetch("http://httpstat.us/500")
    // .then(function() {
    //     console.log("ok");
    // }).catch(function() {
    //     console.log("error");
    // });
    // Example 2
    fetch("http://httpstat.us/500")
      .then((response)=>{
        if(!response.ok) throw Error(response.statusText);
        return response;
      })
      .then(()=> {
          console.log("ok");
      }, (error)=>{
        console.log('promise onReject method');
        console.log(error)
      })
      .catch(function() {
          console.log("error");
      });
    
  }

  // handleErrors(response) {
  //   if (!response.ok) throw Error(response.statusText);
  //   return response;
  // }

  render() {
    const {error, employees} = this.state;
    return(
      <div>
      {
        (error) ? (
          <p>Failed to get data.</p>
        ) : (
          <div>
            <h1>Fetch method TEST</h1>
          </div>
        )
      }
      </div>      
    )
  }
}

