import React, { useState, useRef, useContext} from 'react'

import axios from 'axios';

import { ImageContext } from '../App';

import Dropdown from './Dropdown.js';

import '../styles/Navbar.scss'

function Navbar() {

	const queryRef = useRef();
	const collectionRef = useRef();

	// get images from context
	const {images, setImages} = useContext(ImageContext);

	// collection selected
	const [selected, setSelected] = useState(false);

	// collection name
	const [collectionName, setCollection] = useState("");

	const handleClick = async () => {

		console.log(queryRef.current.value);
		const query = queryRef.current.value;

		// let { data : results} = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=Gn1O41PYFtLC-EdlVpqu_rsSDF5aeVCiQJdTMFQhoeY` +   (selected ? `&collections=${collectionRef.current.value}` : '')  );

		let {data : results} = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=Gn1O41PYFtLC-EdlVpqu_rsSDF5aeVCiQJdTMFQhoeY` +   (selected !== '' ? `&collections=${collectionName}` : ''))

		results = results.results;
		console.log(results);

		let images = results.map(item => {
			return({
					source : item.urls.regular,
					link : item.links.html
			})
		})

		setImages(images);

		console.log(results);

	}

	return (
		<div className="navbar" style={{
			padding : '20px 0px'
		}}>

			<div className="icon">

				<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="70" height="70" rx="26" fill="url(#paint0_linear)"/>
				<g clip-path="url(#clip0)">
				<path d="M44.263 23.9016C39.8481 23.5859 35.4202 24.2951 31.3176 25.975L28.0309 24.7793C27.8949 23.4938 27.8709 22.1987 27.9591 20.9089C27.9652 20.7917 27.9475 20.6745 27.9073 20.5644C27.8671 20.4544 27.8051 20.3538 27.7252 20.2687C27.6453 20.1837 27.5491 20.116 27.4425 20.0698C27.3358 20.0236 27.221 19.9998 27.105 20C26.9871 20 24.1479 20.0432 20.5213 23.7098C16.476 27.7945 16.0199 35.6166 16.0011 35.9415C15.9897 36.1666 16.0657 36.3873 16.213 36.5566C17.7336 38.1007 19.7055 39.1082 21.8366 39.43C24.533 39.7804 27.2717 39.327 29.717 38.1255L27.3595 42.6802C27.3231 42.75 27.2686 42.8085 27.2018 42.8493C27.1349 42.8901 27.0583 42.9117 26.9803 42.9117H17.7094C17.2563 42.9117 16.8218 43.0938 16.5015 43.4178C16.1811 43.7419 16.0011 44.1814 16.0011 44.6396C16.0011 45.0979 16.1811 45.5374 16.5015 45.8614C16.8218 46.1855 17.2563 46.3675 17.7094 46.3675H37.7818C38.2348 46.3675 38.6694 46.1855 38.9897 45.8614C39.3101 45.5374 39.4901 45.0979 39.4901 44.6396C39.4901 44.1814 39.3101 43.7419 38.9897 43.4178C38.6694 43.0938 38.2348 42.9117 37.7818 42.9117H34.6214C34.5491 42.9116 34.478 42.8929 34.4148 42.8575C34.3515 42.822 34.2981 42.771 34.2596 42.7091C34.221 42.6472 34.1986 42.5764 34.1944 42.5034C34.1902 42.4304 34.2043 42.3575 34.2354 42.2914L37.8997 34.5989C37.9689 34.4437 38.0676 34.3038 38.1903 34.1872C38.3129 34.0706 38.4571 33.9796 38.6145 33.9193C38.772 33.8591 38.9396 33.8308 39.1079 33.836C39.2761 33.8413 39.4417 33.8801 39.5951 33.9501C39.7486 34.0201 39.8869 34.12 40.0022 34.244C40.1174 34.3681 40.2074 34.5139 40.267 34.6732C40.3266 34.8324 40.3545 35.002 40.3493 35.1721C40.3441 35.3423 40.3058 35.5098 40.2366 35.665L38.8187 38.8426C38.7898 38.9086 38.7775 38.9809 38.7829 39.0529C38.7883 39.125 38.8111 39.1946 38.8495 39.2555C38.8882 39.316 38.9414 39.3658 39.0041 39.4002C39.0667 39.4346 39.1369 39.4526 39.2082 39.4525H41.95C46.7503 39.4525 52.3022 41.7091 52.3022 47.228C52.3009 48.4878 51.8055 49.6956 50.9248 50.5864C50.0441 51.4772 48.8499 51.9783 47.6044 51.9797C47.0637 51.9793 46.5291 51.8637 46.0355 51.6405C45.5419 51.4172 45.1004 51.0912 44.7396 50.6838C44.6211 50.5581 44.5287 50.4097 44.4679 50.2472C44.4072 50.0848 44.3794 49.9116 44.3861 49.7381C44.3928 49.5646 44.434 49.3942 44.5071 49.237C44.5802 49.0799 44.6838 48.9392 44.8117 48.8233C44.9397 48.7075 45.0893 48.6188 45.2518 48.5627C45.4143 48.5065 45.5862 48.4839 45.7575 48.4962C45.9288 48.5086 46.0959 48.5557 46.2488 48.6346C46.4017 48.7136 46.5374 48.8228 46.6478 48.9559C46.7684 49.0916 46.9159 49.2003 47.0807 49.2747C47.2455 49.3491 47.4239 49.3876 47.6044 49.3878C48.1705 49.3869 48.7131 49.1591 49.1134 48.7542C49.5136 48.3494 49.7389 47.8005 49.7398 47.228C49.7227 46.5668 49.493 45.9292 49.0855 45.412C46.6085 42.0737 41.6254 45.1718 41.6254 48.9524C41.6254 52.733 44.1879 55 48.4586 55C54.0652 55 57 47.1779 57 39.4491C57 30.1807 52.4782 24.6584 44.263 23.9016Z" fill="#0F1046"/>
				<path d="M24.5 35C26.433 35 28 33.433 28 31.5C28 29.567 26.433 28 24.5 28C22.567 28 21 29.567 21 31.5C21 33.433 22.567 35 24.5 35Z" fill="white"/>
				<path d="M24.5 33C25.3284 33 26 32.3284 26 31.5C26 30.6716 25.3284 30 24.5 30C23.6716 30 23 30.6716 23 31.5C23 32.3284 23.6716 33 24.5 33Z" fill="#2A2B8D"/>
				</g>
				<defs>
				<linearGradient id="paint0_linear" x1="64.9275" y1="90.2898" x2="7.10145" y2="-24.3478" gradientUnits="userSpaceOnUse">
				<stop stop-color="#2A2B8D"/>
				<stop offset="0.0331492" stop-color="#2B2F8F"/>
				<stop offset="1" stop-color="#559BD1"/>
				</linearGradient>
				<clipPath id="clip0">
				<rect width="40" height="40" fill="white" transform="translate(16 18)"/>
				</clipPath>
				</defs>
				</svg>




			</div>
			
			<input className="navbar-item" placeholder="Query" ref={queryRef}></input>

			<Dropdown value={{
				collectionName,
				setCollection,
				selected,
				setSelected
			}}></Dropdown>

			<button className="navbar-item" onClick={handleClick}>Search</button>


		</div>
	)
}

export default Navbar
