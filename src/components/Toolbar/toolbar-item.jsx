import BaseComponent from '../base-component';
import {PropTypes} from 'react';

export default class ToolbarItem extends BaseComponent {

	static propTypes = {
		icon:PropTypes.string,
		className:PropTypes.string,
		txt:PropTypes.string
	}

	handleClick(){
		const {onClick} = this.props;
		if(onClick){
			onClick();
		}
	}

	render(){
		const {href='#',icon='',className='',txt=''} = this.props;
		return (
		        <a href={'#/'+href} className={"tab-link "+className} onClick={this.handleClick.bind(this)}>
		            <i className={"icon "+icon}>
		            </i>
		            <span className="tabbar-label">{txt}</span>
		        </a>
			);
	}
}