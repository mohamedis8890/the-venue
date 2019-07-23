import React from "react";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNFO from "./components/venue_nfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";

import "./resources/styles.css";
import Footer from "./components/header_footer/Footer";

function App() {
	return (
		<div
			className="App"
			style={{
				height: "1500px",
				backgroundColor: "cornflowerblue"
			}}
		>
			<Header />
			<Element name="Starts_in">
				<Featured />
			</Element>
			<Element name="Venue_NFO">
				<VenueNFO />
			</Element>
			<Element name="Highlights">
				<Highlights />
			</Element>
			<Element name="Pricing">
				<Pricing />
			</Element>
			<Element name="Location">
				<Location />
			</Element>
			<Footer />
		</div>
	);
}

export default App;
