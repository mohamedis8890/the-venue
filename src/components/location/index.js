import React from "react";

export default function Location() {
	return (
		<div className="location_wrapper">
			<iframe
				title="location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6348.593194040575!2d-122.26220434531476!3d37.797256670927915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b0555b6c779cad4!2sOakland+Museum+of+California!5e1!3m2!1sen!2seg!4v1563865732649!5m2!1sen!2seg"
				width="100%"
				height="800px"
				frameBorder="0"
				allowFullScreen
			/>
			<div className="location_tag">
				<div>LOCATION</div>
			</div>
		</div>
	);
}
