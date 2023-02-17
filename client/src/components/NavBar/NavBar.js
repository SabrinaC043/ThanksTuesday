import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="NavBarContainer">
			<h3>Welcome to the Store!</h3>
			<ul>
				<li>Home</li>

			</ul>

			<section className="OptionBar">
				<div className="CategoryList">
					Categories:
					<select>
						<option>Outdoor Furniture</option>
						<option>Kitchen</option>
						<option>Organization & Storage</option>
						<option>Living Room</option>
						<option>Bedroom</option>
						<option>Dining Room</option>
					</select>
				</div>
				<div className="searchBar">
					Search:
					<input type="text"></input>
				</div>
			</section>
		</div>
	);
}
