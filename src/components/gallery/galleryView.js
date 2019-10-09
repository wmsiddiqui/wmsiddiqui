import React from 'react';
import Gallery from 'react-grid-gallery';
import './gallery.css';

const IMAGES = [
	{
		src: 'https://drive.google.com/uc?id=12x7-vIpc6kVn_rspdrYQ6U32k4MfRCAs',
		thumbnail: 'https://drive.google.com/uc?id=12x7-vIpc6kVn_rspdrYQ6U32k4MfRCAs',
		thumbnailWidth: 378,
		thumbnailHeight: 504,
		caption: 'RG Astray Gold Frame Amatsu Mina with Gaia Colors Starbright Gold and Starbright Brass gold paint'
	},
	{
		src: 'https://drive.google.com/uc?id=1TpCd1rSkPQyBCK008uLxjWE53l9tWENV',
		thumbnail: 'https://drive.google.com/uc?id=1TpCd1rSkPQyBCK008uLxjWE53l9tWENV',
		thumbnailWidth: 750,
		thumbnailHeight: 500,
		caption: 'HG Protoss Zealot Grimgerde Custom Paintjob with LED Monoeye'
	},
	{
		src: 'https://drive.google.com/uc?id=1Oob-_ACAyVMmnFJEvUnTY5wo4yRHNg-k',
		thumbnail: 'https://drive.google.com/uc?id=1Oob-_ACAyVMmnFJEvUnTY5wo4yRHNg-k',
		thumbnailWidth: 378,
		thumbnailHeight: 504,
		caption: 'RG Astray Red Frame with custom LED mod'
	},
	{
		src: 'https://drive.google.com/uc?id=1ixFF5QN5-cOt2rVpNFvwbCLJPWFOPx7I',
		thumbnail: 'https://drive.google.com/uc?id=1ixFF5QN5-cOt2rVpNFvwbCLJPWFOPx7I',
		thumbnailWidth: 378,
		thumbnailHeight: 504,
		caption: 'ModelHeart/SuperNova Wing Zero Mo Kai Custom'
	},
	{
		src: 'https://drive.google.com/uc?id=1__ses-byyg8frh-QQSKK5atyMLaaT8_M',
		thumbnail: 'https://drive.google.com/uc?id=1__ses-byyg8frh-QQSKK5atyMLaaT8_M',
		thumbnailWidth: 378,
		thumbnailHeight: 504,
		caption: 'HG Wing Zero Honoo with custom LED mods'
	},
	{
		src: 'https://drive.google.com/uc?id=19JnwprjK50h8e1OTP0NIQYP8BAz4YirG',
		thumbnail: 'https://drive.google.com/uc?id=19JnwprjK50h8e1OTP0NIQYP8BAz4YirG',
		thumbnailWidth: 378,
		thumbnailHeight: 504,
		caption: 'RG Banshee Norn with custom LED mods'
	}
];

export default function() {
	return (
		<React.Fragment>
			<h1>Gallery</h1>
			<p>Welcome to my Gunpla gallery. Click on one of the pictures below to expand them!</p>
			<div className="gallery-div">
				<Gallery images={IMAGES} rowHeight={300} />
			</div>

			<div className="pad" />
			{/* <p>
				These model kits come on
				<a href="https://en.wikipedia.org/wiki/Sprue_(manufacturing)#Injection_molding"> plastic sprues </a>
				which have to be cut to remove the parts. The parts then have to be sanded to hide the cuts where they
				were joined to the sprues, and then assembled. Many people like to apply decals which occasionally come
				with these kits, and many also like painting the kits to make them unique. I personally also like the
				challege of fitting small SMD LEDs into these mini robot model kits, since most of them are less than 6
				inches in height and have full articulation. It really allows me to think of how to engineer the wiring
				in such a way which it not only works, but does not affect the articulation so they can remain posable.
			</p> */}
		</React.Fragment>
	);
}
