import React from "react";
import style from "../style";

export default function composeItemBrothers(Component) {
	
	class Compose extends React.Component
	{
		constructor(props) 
		{
			super(props);	
		}	

		render()
		{
			let {children, ...props} = this.props;
			return (
				<Component {...props}>	
					{children}	
				</Component>
			);	
		}
	}

	return Compose;
}
