//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import '../css/sidenavbar.css';
import School from '../svg/school.svg'
import Results from '../svg/results.svg'

class SideNavBar extends Component{
	state={
		sidebarOpened: false
	}

  toggleSideBarCaret = () => {
		this.setState({ 
			sidebarOpened: !this.state.sidebarOpened
		})
  }

	render(){
		const { active, place } = this.props
	  return (
	  	<div className="SideNavBar-container">
	  		{
	  			active &&
		  		<aside className="SideNavBar">

		  			{ /*Hidden Content*/
		  				this.state.sidebarOpened &&
			  			<section className="SideNavBar-folded">
			  				{/*Header*/}
			  				<a className="SideNavBar-header noLink">
			  					<figure className="SideNavBar-headerBadge">
			  						<img 
			  							src={School} 
			  							width="55px" /*"36px"*/ 
			  							alt="Centro de Trabajo" 
			  						/>
			  					</figure>
			  					<p className="SideNavBar-headerTitle">
			  						Centro de Trabajo {place.name}
			  					</p>
			  				</a>

			  				{/*Content*/}
			  				<div className="SideNavBar-completeList">
			  					<section className="SideNavBar-listObject">
			  						<section className="SideNavBar-listConcept">
			  							<div>{ place.infoTitle }</div>
			  						</section>
			  						<section className="SideNavBar-listContents">
			  							<a className="SideNavBar-listContent noLink" alt="Dirección">
			  								<div className="SideNavBar-contentName">
			  									Dirección: { place.infoAddress }
			  								</div>
			  								{/*<div className="SideNavBar-check icon-check_B is-seen nextContentSeen"><span className="glyphicon glyphicon-ok-sign"></span></div>*/}
			  							</a>
			  							<a className="SideNavBar-listContent noLink" alt="Teléfono">
			  								<div className="SideNavBar-contentName">
			  									Teléfono: { place.infoPhone }
			  								</div>
			  								{/*<div className="SideNavBar-check icon-check_B is-seen nextContentSeen"><span className="glyphicon glyphicon-ok-sign"></span></div>*/}
			  							</a>
			  						</section>
			  					</section>
			  				</div>

			  				{/*Footer*/}
			  				<a className="SideNavBar-footer atBottom" target="_blank" rel="noopener noreferrer" href="http://servicioprofesionaldocente.sep.gob.mx/ms/ingreso_2018/consulta_resultados/" alt="Consulta de Resultados">
			  					<figure className="SideNavBar-footerBadge">
			  						<img 
			  							src={Results} 
			  							alt="Consulta de Resultados" 
			  							width="35px" 
			  						/>
			  					</figure>
			  					<div className="SideNavBar-footerInfo">
			  						<strong>
			  							Ir a:
			  						</strong>
			  						<p className="SideNavBar-footerTitle">
			  							Consulta de Resultados
			  						</p>
			  					</div>
			  				</a>
			  			</section>
		  			}

		  			{/*External Tab*/}
		  			<section className={`SideNavBar-unfolded${this.state.sidebarOpened?" shadow":""} smallArrow`}>
		  				<div 
		  					className="SideNavBar-button icon-arrow-right_A centeredBtn"
		  					onClick={this.toggleSideBarCaret}
		  				>
		  					<span 
		  						className={`glyphicon glyphicon-menu-${this.state.sidebarOpened?"left":"right"}`}
		  					>
		  					</span>
		  				</div>
		  				{/*<div className="SideNavBar-contents">
		  					<a href="#" className="SideNavBar-content is-active" alt="test">1</a>
		  				</div>*/}
		  			</section>
		  		</aside>
	  		}
	  	</div>
	  )
	}
}

export default SideNavBar;
