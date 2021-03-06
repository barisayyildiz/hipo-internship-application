import React, { useState } from 'react'

import '../styles/Dropdown.scss';

function Dropdown(props) {

	const [open, setOpen] = useState(false);
	const {collectionName, setCollection, selected, setSelected } = props.value;
	return (
		<>
			<div className={`dropdown ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
				
				<span
					className={`placeholder ${selected ? 'active' : ''}`}
				>{collectionName ? collectionName.split(",").join(" & ") : 'Collections'}</span>

				<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.744 6.17159C5.34666 6.61401 4.65334 6.61401 4.256 6.17159L0.436019 1.91818C-0.142142 1.27442 0.314743 0.249999 1.18002 0.249999L8.81999 0.25C9.68526 0.25 10.1421 1.27442 9.56398 1.91818L5.744 6.17159Z" fill="#050417"/>
				</svg>
			
				{open &&
					<div className="options">
						<ul>
							<li onClick={e => {
								setCollection("Featured");
								setSelected(true)
							}}>
								<span>Featured</span>
							</li>
							<li onClick={e => {
								setCollection("Wallpapers");
								setSelected(true);
							}}>
								<span>Wallpapers</span>
							</li>
							<li onClick={e => {
								setCollection("Nature");
								setSelected(true);
							}}>
								<span>Nature</span>
							</li>
							<li onClick={e => {
								setCollection("Textures,Patterns");
								setSelected(true);
							}}>
								<span>Textures & Patterns</span>
							</li>
							<li onClick={e => {
								setCollection("Architecture");
								setSelected(true);
							}}>
								<span>Architecture</span>
							</li>
						</ul>
					</div>
				}


				<div className="shadow"></div>
			
			</div>
		</>
	)
}

export default Dropdown
