import React from "react";

import Carrousel from "./Carrousel";
import CountDown from "./CountDown";

export default function Featured() {
	return (
		<div style={{ position: "relative" }}>
			<Carrousel />
			<div className="artist_name">
				<div className="wrapper">Ariana Grande</div>
			</div>

			<CountDown />
		</div>
	);
}
