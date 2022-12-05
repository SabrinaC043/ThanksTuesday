import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="NavBarContainer">
			<h1>Thank Tuesday</h1>
			<section className="OptionBar">
				<div className="CategoryList">
					Categories:
					<select>
						<option>Lawn & Healthcare</option>
						<option>Life Lessons</option>
						<option>Placehoder</option>
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
