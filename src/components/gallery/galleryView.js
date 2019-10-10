import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Photos from './content';
import './gallery.css';

export default function() {
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};
	return (
		<React.Fragment>
			<h1>Gallery</h1>
			<p>Welcome to my Gunpla gallery. Click on one of the pictures below to expand them!</p>
			<div>
				<Gallery photos={Photos} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox} className="gallery-carousel">
							<Carousel
								className="gallery-carousel"
								currentIndex={currentImage}
								views={Photos.map((x) => ({
									...x,
									srcset: x.srcSet,
									caption: x.title
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</div>
			<p className="gallery-text">
				These model kits come on
				<a href="https://en.wikipedia.org/wiki/Sprue_(manufacturing)#Injection_molding"> plastic sprues </a>
				which have to be cut to remove the parts. The parts then have to be sanded to hide the cuts where they
				were joined to the sprues, and then assembled. Many people like to apply decals which occasionally come
				with these kits, and many also like painting the kits to make them unique. I personally also like the
				challege of fitting small SMD LEDs into these mini robot model kits, since most of them are less than 6
				inches in height and have full articulation. It really allows me to think of how to engineer the wiring
				in such a way which it not only works, but does not affect the articulation so they can remain posable.
			</p>
		</React.Fragment>
	);
}
