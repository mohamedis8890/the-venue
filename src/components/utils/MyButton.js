import React from "react";
import Button from "@material-ui/core/Button";

import ticket_icon from "../../resources/images/icons/ticket.png";

export default function MyButton(props) {
	const { link, color, bck, text } = props;

	return (
		<Button
			href={link}
			variant="contained"
			size="small"
			style={{
				backgroundColor: bck,
				color: color
			}}
		>
			<img src={ticket_icon} className="iconImage" alt="icon button" />
			{text}
		</Button>
	);
}
