import React from "react";
import style from "../style";
import shouldPureComponentUpdate from "react-pure-render/function";

export default function composeItemBrothers(Component) {
	
	class Compose extends React.Component
	{
		constructor(props) 
		{
			super(props);	
		}	

		shouldComponentUpdate = shouldPureComponentUpdate

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
