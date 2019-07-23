import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

export default class Discount extends Component {
	state = {
		percentageStart: 0,
		percentageEnd: 30
	};

	percentage = () => {
		let { percentageStart, percentageEnd } = this.state;
		if (percentageStart < percentageEnd) {
			this.setState({ percentageStart: percentageStart + 1 });
		}
	};

	componentDidUpdate() {
		setTimeout(() => this.percentage(), 30);
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="discount_wrapper">
					<Fade onReveal={() => this.percentage()}>
						<div className="discount_porcentage">
							<span>{this.state.percentageStart}%</span>
							<span>OFF</span>
						</div>
					</Fade>
					<Slide right>
						<div className="discount_description">
							<h3>Purchase Tickets before 20th June</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti provident voluptatum nulla amet fugiat dicta iusto a,
								enim fuga voluptatibus consequuntur illum sunt nisi repellat
								quidem ea beatae soluta quia
							</p>
							<MyButton
								text="Get The Tickets"
								bck="#ffa800"
								color="#ffffff"
								link="http://www.google.com/"
							/>
						</div>
					</Slide>
				</div>
			</div>
		);
	}
}
