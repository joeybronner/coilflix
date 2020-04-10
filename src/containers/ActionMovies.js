import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { fetchActionMovies } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

class ActionMovies extends Component {

  componentWillMount() {
    this.props.fetchActionMovies();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.actionMovies.data) {
      const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28";
      var arr = [
        {
          original_name: "MINANO Digital Eco Farm with JLIC Institutes",
          name: "MINANO Digital Eco Farm with JLIC Institutes",
          first_air_date: "2019 December",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=e454a1b2-3e74-45ac-9b3f-1798f8eb1c49',
          backdrop_path: "/farm.jpg",
          vote_average: 10,
          overview: "Connection of farmers who own idle farmyard with interested people in urban areas encourage to revitalise the rural economy. This is achieved through technology to  support  farming remotely. IoT technology makes the link between them to work as an ecosystem. Drone vision, Intelligent sensors, Cyber defense etc. are elements to fill the gap of the geographical distance to the limit. The pilot has been done with SAP technology at Saitama. Using SAP Cloud Platform (SCP) Internet of Things service and PSI devices, the remote connections were tested to provide scalable ingestion of IoT data. The DMC device from PSI was utilized and successfully integrated with SCP IoT Service.",
          poster_path: "/farm.jpg",
        },
        {
          original_name: "Intelligent Retail Shelf Monitoring",
          name: "Intelligent Retail Shelf Monitoring",
          first_air_date: "2019 November",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=c4d9c934-1bea-45b4-ae66-972fe1294c14',
          backdrop_path: "/shelf.jpg",
          vote_average: 10,
          overview: "The Intelligent shelf continuously monitors the shelf and provide real-time inventory changes to the external system for order and inventory fulfillment. The System uses a camera installed at strategic locations in the retail outlet and does monitoring during operational hours of the outlet. It raises alerts to trigger fulfillment from the stores and triggers updates in the Backend retail ERP system.",
          poster_path: "/shelf.jpg",
        },
        {
          original_name: "Machine Talk – A Platform for Smart Shop-floor",
          name: "Machine Talk – A Platform for Smart Shop-floor",
          first_air_date: "2019 August",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=0a6e2ee7-ffbe-4775-8be4-bbdf71927cbe',
          backdrop_path: "/shop.jpg",
          vote_average: 10,
          overview: "MachineTalk built on SAP Leonardo puts the right data in the hands of decision makers when they need it and allows companies to take immediate action in response to changing shop-floor demands. MachineTalk provides an integrated approach to data collection, presentation, analysis and deep learning. It maximizes the ROI of the systems by allowing effective aggregation and analyses of the incredible volume, velocity, and variety of data from the factory floor for real-time, data-driven insight, enabling fact-based controls, decisions and actions.",
          poster_path: "/shop.jpg",
        },
        {
          original_name: "Real-time Flood Monitoring & Forecasting (RefORM™) on SAP HANA",
          name: "Real-time Flood Monitoring & Forecasting (RefORM™) on SAP HANA",
          first_air_date: "2016 December",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:2',
          backdrop_path: "/flood.jpg",
          vote_average: 10,
          overview: "MArteria's new flood monitoring and forecasting solution RefORM™ built with support of COIL on SAP HANA platform enables state irrigation departments to centrally monitor, analyse and forecast water flood situations. The solution Collects: Automated data collection and consolidation of data from various sensors installed across reservoirs, dam sites and canals",
          poster_path: "/flood.jpg",
        },
        {
          original_name: "Smart Factory Showcase with Fujitsu",
          name: "Smart Factory Showcase with Fujitsu",
          first_air_date: "2018 March",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:411',
          backdrop_path: "/facto.jpg",
          vote_average: 10,
          overview: "Industry 4.0 brings in a new wave of connected manufacturers and smart factories. As customers are incorporating Industry 4.0 into their manufacturing & supply chain strategy, they often struggle to transform their vision into business outcomes. Fujitsu Smart Factory showcase demonstrate how to leverage SAP Digital Supply Chain solutions (with SAP PCo, SAP MII, SAP ME, SAP 3D Visual Enterprise) and SAP Leonardo for a connected, intelligent and real time plant, thus help manufacturers in their digital transformation journey. This helps in increasing shop floor productivity, maximizing returns on assets, improving quality and reducing cost.",
          poster_path: "/facto.jpg",
        },
      ];
      movies = getMovieRows(arr, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">IoT</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { actionMovies: state.action }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchActionMovies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionMovies);