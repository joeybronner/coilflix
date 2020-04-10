import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { fetchTopRated } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

class TopRated extends Component {

  componentWillMount() {
    this.props.fetchTopRated();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.topRated.data) {
      const url = "/movie/top_rated?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US";
      var arr = [
        {
          original_name: "Syn4TDF for SAP Tax Declaration Framework",
          name: "Syn4TDF for SAP Tax Declaration Framework",
          first_air_date: "2019 September",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=44bbf86f-8631-48f1-8933-606633a1e262',
          backdrop_path: "/tax.jpg",
          vote_average: 10,
          overview: "SAP Co-Innovation Lab (COIL) supported Synchro with technical infrastructure (dedicated system landscape with all required components and regular updates of support packages and SAP Notes), technical support during the development phase, and facilitation of the interaction with the SAP TDF Development Team in relevant occasions.",
          poster_path: "/tax.jpg",
        },
        {
          original_name: "AFS - Accenture Fiscal Solution",
          name: "AFS - Accenture Fiscal Solution",
          first_air_date: "2019 April",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=507b4c8a-16bd-4935-a6c0-0965e8bbb4d2',
          backdrop_path: "/fiscal.jpg",
          vote_average: 10,
          overview: "SAP Co-Innovation Lab (COIL) supported Accenture during this new project cycle with technical infrastructure (dedicated system landscape with all required components and regular updates of support packages and SAP Notes), technical support during the development phase, and facilitation of the interaction with the SAP TDF Development Team in relevant occasions. ",
          poster_path: "/fiscal.jpg",
        },
        {
          original_name: "Energy Portfolio Systems (EPS)",
          name: "Energy Portfolio Systems (EPS)",
          first_air_date: "2019 March",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=fedd9fcc-1478-4511-bbb8-51f3e673cc4d',
          backdrop_path: "/energy.jpg",
          vote_average: 10,
          overview: "Partner PROCOM and COIL jointly prototyped a solution to link energy trading, dispatch and nomination with technical operations data and processes. It demonstrates that speed and quality of connected asset and trading data allows to manage changes at plant positions more proactively.This leads to an economic balance between short-term operations goals and asset availability costs. Predictive models can then be applied to the connected asset and plant data to achieve an economic balance between short-term operations goals and asset availability costs.",
          poster_path: "/energy.jpg",
        },
        {
          original_name: "Greens Cloud for Smart Building",
          name: "Greens Cloud for Smart Building",
          first_air_date: "2019 February",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:429',
          backdrop_path: "/building.jpg",
          vote_average: 10,
          overview: "In this project, a prototype of the “Beisz Greens Cloud for Smart Building” is developed by CloudMII (also know as Beisz) in cooperation with SAP Co-Innovation Lab Shanghai. This prototype is based on SAP Cloud Platform and allow the retail and manufacture customers to deploy sensors to collect building data (ex: electronics and water), and these sensor data would be collected and analyzed leveraging SAP HANA in the cloud. Among others, this prototype will collect and analyze the energy related IoT data from building. ",
          poster_path: "/building.jpg",
        },
      ];
      movies = getMovieRows(arr, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">SAP HANA & Big Data</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { topRated: state.topRated }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTopRated }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);