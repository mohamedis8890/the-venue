import React from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

export default function Carrousel() {
	const settings = {
		dots: false,
		speed: 500,
		infinite: true,
		autoplay: true
	};
	return (
		<div
			className="carrousel_wrapper"
			style={{ height: "100vh", overflow: "hidden" }}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{ backgroundImage: `url(${slide_one})`, height: "100vh" }}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{ backgroundImage: `url(${slide_two})`, height: "100vh" }}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{ backgroundImage: `url(${slide_three})`, height: "100vh" }}
					/>
				</div>
			</Slider>
		</div>
	);
}
