import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

export default function SideDrawer({ open, onClose }) {
	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			offset: -150,
			smooth: true
		});
		onClose(false);
	};
	return (
		<Drawer anchor="right" open={open} onClose={() => onClose(false)}>
			<List component="nav">
				<ListItem button onClick={() => scrollToElement("Starts_in")}>
					Event Starts in
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Venue_NFO")}>
					Venue NFO
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Highlights")}>
					Highlights
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Pricing")}>
					Pricing
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Location")}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
}
