import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { fetchTrending } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

class TrendingMovies extends Component {

  componentWillMount() {
    this.props.fetchTrending();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.trending.data) {
      const url = '/trending/all/week?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US';
      var arr = [
        {
          original_name: "Robotic Tunnel Inspection",
          name: "Robotic Tunnel Inspection",
          first_air_date: "2019 November",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=507860f6-fd13-4882-9ddb-c98ce23db3f7',
          backdrop_path: "/robotic.jpg",
          vote_average: 10,
          overview: "Utility tunnels are hazardous areas for inspection team. This showcase demonstrates use of robots for inspection of hazardous areas thus improving the health and wellbeing of inspection teams. A swarms of autonomous robots record 360° video and/or laser scans. These autonomous robots patrol the tunnels and continually send inspection data into the cloud. ",
          poster_path: "/robotic.jpg",
        },
        {
          original_name: "Modum Temperature Monitoring with SAP Leonardo Blockchain",
          name: "Modum Temperature Monitoring with SAP Leonardo Blockchain",
          first_air_date: "2018 June",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:409',
          backdrop_path: "/modum.png",
          vote_average: 10,
          overview: "Regulatory obligations within the EU require pharmaceutical distributors to prove that their products have not been subject to conditions that may affect quality and efficacy (GDP 2013/C 343/01). Modum provides supply chain monitoring solutions using IoT sensors by building trusted links between physical goods and logistics systems, leveraging smart contracts based on SAP blockchain technology. It provides data integrity and regulatory compliance in pharma logistics.",
          poster_path: "/modum.png",
        },
        {
          original_name: "Items Search by Image - an App by Integra",
          name: "Items Search by Image - an App by Integra",
          first_air_date: "2019 September",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=7dfc082e-fc0f-453e-a68a-0c1b6d291871',
          backdrop_path: "/searchimage.jpg",
          vote_average: 10,
          overview: "Through the App in the smartphone, the user takes a photo of the item he wants to search. Then the system recognizes the item by image and searches in the database. The solution uses SAP Leonardo OCR functions to extract text from the image and a Machine Leaning model to classify images based on a specially trained model for the industry.",
          poster_path: "/searchimage.jpg",
        },
        {
          original_name: "Hybris Commerce – Yellow Messenger Chatbot Integration",
          name: "Hybris Commerce – Yellow Messenger Chatbot Integration",
          first_air_date: "2018 April",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:404',
          backdrop_path: "/yellow.jpg",
          vote_average: 10,
          overview: "Yellow Messenger is an AI enabled chatbot that offers a voice and chat based interaction with business applications. SAP Hybris Commerce allows an omnichannel experience for the end user. While engaging with an organization, an end user may require additional information which necessitates further contact with a member of the customer contact center or via other means; such contact while increasing the cost for the organization, often is a contributor towards a sub-optimal end user experience.",
          poster_path: "/yellow.jpg",
        },
        {
          original_name: "Mtell Machine Learning for SAP HANA",
          name: "Mtell Machine Learning for SAP HANA",
          first_air_date: "2016 December",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:70',
          backdrop_path: "/mtell.png",
          vote_average: 10,
          overview: "Mtell offers a machine learning solution that uses autonomous software agents to carry out the gathering, validation/cleansing of data, and full automated learning of patterns of normal and failure behavior of pools of equipments. With this experimental project at COIL, Mtell rewrites its Autonomous Agent Generation engine to run natively inside HANA using PAL library. The integration also leverages the Mtell data repository built on HANA. For a typical customer deployment, Mtell trains hundreds to thousands of autonomous agents; running this process natively inside HANA allows a faster response to issues in real-time. HANA provides the computational capability for Mtell to solve problems that could not be solved in the past.",
          poster_path: "/mtell.png",
        },
        {
          original_name: "SAP NS2",
          name: "SAP NS2",
          first_air_date: "2015 June",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:59',
          backdrop_path: "/security.jpg",
          vote_average: 10,
          overview: "The Multi-INT Knowledge Exploration and Discovery Engineered Solution from SAP National Security Services Inc. (SAP NS2™) provides an activity-based intelligence (ABI) environment for knowledge and intelligence curation through “smart” process–driven methods. These methods include acquiring and analyzing multiple data types from multiple sources to derive actionable insight for situational awareness, strategic foresight, and anticipatory analytics.",
          poster_path: "/security.jpg",
        },
        {
          original_name: "Marenco Helicopter Maintenance using Augmented Reality (AR)",
          name: "Marenco Helicopter Maintenance using Augmented Reality (AR)",
          first_air_date: "2014 November",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=pr:24',
          backdrop_path: "/heli.jpg",
          vote_average: 10,
          overview: "Marenco Swisshelicopters is a new producer for a multi-purpose light single-engine helicopter. End customers are often very small operators (1 helicopter, 1-2 staff) with paper driven maintenance processes and documentation. On the other hand legal requirements for maintenance documentation in the aviation industry are very strict.",
          poster_path: "/heli.jpg",
        },
      ];
      movies = getMovieRows(arr, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">Tech trends</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { trending: state.trending }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTrending }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
