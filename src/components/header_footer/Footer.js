import React from "react";
import Fade from "react-reveal/Fade";

export default function Footer() {
	return (
		<footer className="bck_red">
			<Fade delay={500}>
				<div className="font_righteous footer_logo_venue">The Venue</div>
				<div className="footer_copyright">
					The Venue&copy;2019. All rights reserved
				</div>
			</Fade>
		</footer>
	);
}
