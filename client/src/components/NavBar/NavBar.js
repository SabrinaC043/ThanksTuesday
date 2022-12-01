import "./NavBar.css";

export default function NavBar() {
	<div className="NavBar-container">
		<h1>THank Tuesday</h1>
		<section>
			<div className="CategoryList">
				Categories
				<select>
					<option>Lawn & Healthcare</option>
					<option>Life Lessons</option>
				</select>
			</div>
			<div className="searchBar">
				<input type="text"></input>
			</div>
		</section>
	</div>;
}
