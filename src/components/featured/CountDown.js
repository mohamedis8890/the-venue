import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class CountDown extends Component {
	state = {
		deadline: "Aug, 8, 2019, 12:30:00",
		days: "0",
		hours: "0",
		mins: "0",
		secs: "0"
	};

	timeUnitl = () => {
		const deadline = Date.parse(this.state.deadline);
		const now = Date.parse(new Date());

		const timeUnitl = deadline - now;

		if (timeUnitl > 0) {
			const days = Math.floor(timeUnitl / (1000 * 60 * 60 * 24));
			const hours = Math.floor((timeUnitl / (1000 * 60 * 60)) % 24);
			const mins = Math.floor((timeUnitl / 1000 / 60) % 60);
			const secs = Math.floor((timeUnitl / 1000) % 60);

			this.setState({ days, hours, mins, secs });
		}
	};

	componentDidMount() {
		setInterval(() => this.timeUnitl(), 1000);
	}

	render() {
		const { days, hours, mins, secs } = this.state;
		return (
			<Slide left delay={1000}>
				<div className="countdown_wrapper">
					<div className="countdown_top">Event Starts In</div>
					<div className="countdown_bottom">
						<div className="countdown_item">
							<div className="countdown_time">{days}</div>
							<div className="countdown_tag">Days</div>
						</div>

						<div className="countdown_item">
							<div className="countdown_time">{hours}</div>
							<div className="countdown_tag">Hs</div>
						</div>

						<div className="countdown_item">
							<div className="countdown_time">{mins}</div>
							<div className="countdown_tag">Min</div>
						</div>

						<div className="countdown_item">
							<div className="countdown_time">{secs}</div>
							<div className="countdown_tag">Sec</div>
						</div>
					</div>
				</div>
			</Slide>
		);
	}
}
