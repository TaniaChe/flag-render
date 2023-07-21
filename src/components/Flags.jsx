import React from "react";
import { allFlags } from "../data/data";

class Flags extends React.Component {
	constructor() {
		super()
		this.state = { allFlags: allFlags }
	}
	render() {
		return (
			// console.log(this.state.allFlags[0]["flags"]['png'])// flag img
			// console.log(this.state.allFlags[0]["name"]['official']) //Country name
			<div className="container">
				{
					this.state.allFlags.map((flag) => {
						return (
							<div key={flag["name"]["common"]}>
								<img src={flag["flags"]["png"]} alt='' />
								<p>Flag of the country:</p>
								<h3>{flag["name"]["official"]}</h3>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Flags