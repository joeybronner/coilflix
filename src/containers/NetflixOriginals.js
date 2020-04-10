import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getMovieRows } from '../getMovie';
import { fetchNetflixOriginals } from '../store/actions/index';

class NetflixOriginals extends Component {

  componentWillMount() {
    this.props.fetchNetflixOriginals();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.movies.data) {

      var arr = [
        {
          original_name: "Popchain – In pop we trust",
          name: "Popchain – In pop we trust",
          first_air_date: "2019 May",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=f7bab6e9-6b1b-40d3-9801-a4bbee933ec7',
          backdrop_path: "/popchain.png",
          vote_average: 10,
          overview: "Partner STMS and COIL jointly prototyped a solution for customer Nataïs, a popcorn producer. The solution provides consumers with product transparency from farmer to point-of-sale (POS) through a QR code scan. This helps Nataïs to properly position its high quality products while communicating directly with the consumer (B2B and B2B2C) on its environment-friendly practices and commitment to economic durability for all players. A complete supply chain digital transformation was part of the project to efficiently associate contributors to the transparency chain.",
          poster_path: "/popchain.png",
        },
        {
          original_name: "Healthcare localization for Africa",
          name: "Healthcare localization for Africa",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=91fd615c-a164-46a0-8fcc-2ad91d647059',
          first_air_date: "2019 December",
          backdrop_path: "/healthcareforafrica.png",
          vote_average: 10,
          overview: "The COIL Africa team supported the new SAP partner Converge Solutions in creating a localized version of the SAP Healthcare offering to the requirements of the African market thus offering a fully integrated solution covering the back-office and clinical demands of the healthcare industry. The solution named SAP/CERNER. HEALTHCARE MANAGEMENT SYSTEM enhances the standard functionality to enable interoperability with other solutions in the South African healthcare ecosystem, with an embedded, insight-rich, highly intuitive clinical information system. The solution is provided to customers as Partner Managed Cloud offering.",
          poster_path: "/healthcareforafrica.png",
        },
        {
          original_name: "Immersive Technology Platform",
          name: "Immersive Technology Platform",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=bf91eb9a-e642-4e1c-b5a0-7c4d6d693611',
          first_air_date: "2020 January",
          backdrop_path: "/immersive.png",
          vote_average: 10,
          overview: "Fabrik is an immersive technology platform that simulates installation, training and maintenance phases of complex equipment for Original Equipment Manufacturers (OEMs). With Fabrik, OEMs move away from obsolete 2D content interfaces to immersive 3D experiences using augmented reality and virtual reality. In this co-innovation project with SAP, the work orders for equipment maintenance are retrieved from SAP S4HANA, 3D images are picked up from SAP Visual Enterprise and the asset info is picked from SAP Asset Intelligence Network (AIN). The data from SAP is used by Fabrik’s 3D engine to render the immersive 3D experience. With the strong integration with SAP, Fabrik’ solution reduces the downtime of machines by effectively visualizing standard operating procedures (SOPs, current in a paper/PDF format) into 3D animated walkthroughs. In addition, Fabrik allows collaborative AR thereby connecting remote experts instantly for higher-level support (currently fulfilled by site-visits).",
          poster_path: "/immersive.png",
        },
        {
          original_name: "KrypC - Submission and Validation of Performance Bank Guarantee",
          name: "KrypC - Submission and Validation of Performance Bank Guarantee",
          first_air_date: "2020 January",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=39edacd3-e613-4f0b-850e-ffbdb9a10646',
          backdrop_path: "/krypc.png",
          vote_average: 10,
          overview: "The solution involves integration of KrypCore (KrypC’s middleware tool for accelerated development of BlockChain applications) with SAP’s Hyperledger Blockchain service. This solution has the potential to shift the issuance of the bank guarantees from a manual paper based model into a digital version of Bank Guarantee removing any potential disputes. While doing so it lifts the efficiency of all the parties involved such as Buyers (Oil & gas Companies), Sellers and Banks. The solution incorporates registration of the participants (Supplier/Contractor, Buyer (Oil & Gas), Supplier’s Bank) and Recording Bank Guarantee transaction from Supplier’s Bank into the BlockChain Network.",
          poster_path: "/krypc.png",
        },
        {
          original_name: "Digital Connected Assets showcase for Oil and Gas",
          link: 'https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=9b9edf26-42d6-4027-839e-6f9c14649cde',
          name: "Digital Connected Assets showcase for Oil and Gas",
          first_air_date: "2019 December",
          backdrop_path: "/oilandgas.png",
          vote_average: 10,
          overview: "A multi-phase project to build a tangible end to end showcase of SAP Leonardo IoT, SCP, SAP Edge Services Cloud Edition and Digital Supply Chain solutions with use cases geared for Oil & Gas and any industry with tank, pipeline, and motor infrastructure. With key asset operational data collected by SAP Edge Services and partner gateways, SAP PdMS and Asset Central are used to monitor asset performance on the field, generate notifications based on the event and use machine learning to predict failures and take corrective action.",
          poster_path: "/oilandgas.png",
        }
      ];
      const url = '/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213';
      movies = getMovieRows(arr, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">COIL ORIGINALS</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return { movies: state.netflixOriginals }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNetflixOriginals }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NetflixOriginals);
