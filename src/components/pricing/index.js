import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "../utils/MyButton";

export default class Pricing extends Component {
	state = {
		pricings: [100, 150, 250],
		positions: ["Balcony", "Meduim", "Star"],
		descriptions: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi.",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi.",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi."
		],
		links: ["/sales/b", "/sales/m", "/sales/s"],
		delay: [500, 0, 500]
	};

	showBoxes = () =>
		this.state.pricings.map((box, i) => (
			<Zoom delay={this.state.delay[i]} key={i}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>{this.state.pricings[i]}</span>
							<span>{this.state.positions[i]}</span>
						</div>
						<div className="pricing_description">
							{this.state.descriptions[i]}
						</div>
						<div className="pricing_buttons">
							<MyButton
								link={this.state.links[i]}
								bck="#ffa800"
								color="#ffffff"
								text="Get it Now"
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
					<div className="pricing_wrapper">{this.showBoxes()}</div>
				</div>
			</div>
		);
	}
}
