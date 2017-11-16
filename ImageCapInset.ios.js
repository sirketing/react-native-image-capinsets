import React, {
	PureComponent
} from 'react';

import {
	ImageBackground
} from 'react-native';

export default class ImageCapInset extends PureComponent {
	render() {
		return (
			<ImageBackground
				{ ...this.props }

				style={[
					{
						width: this.props.width,
						height: this.props.height
					},

					this.props.style || {}
				]}

				resizeMode="stretch">

				{ this.props.children }
			</ImageBackground>
		);
	}
}
