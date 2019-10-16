import React from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Spinner from 'react-bootstrap/Spinner';
import Photos from './content';
import './gallery.css';

export default class GalleryView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			isViewerOpen: false,
			currentImageIndex: 0
		};
	}

	openLightbox = (event, { photo, index }) => {
		console.log('clicked!');
		this.setState({
			currentImageIndex: index,
			isViewerOpen: true
		});
	};

	closeLightbox = () => {
		this.setState({
			currentImageIndex: 0,
			isViewerOpen: false
		});
	};

	onLoad = () => {
		this.setState({
			isLoaded: true
		});
	};

	render() {
		return (
			<React.Fragment>
				<h1>Gallery</h1>
				<p>Welcome to my Gunpla gallery. Click on one of the pictures below to expand them!</p>
				<Spinner animation="border" role="status" className={this.state.isLoaded ? 'hidden' : 'spinner'}>
					<span className="sr-only">Loading...</span>
				</Spinner>
				<div className={this.state.isLoaded ? null : 'hidden'}>
					<Gallery photos={Photos} onClick={this.openLightbox} onLoadCallback={this.onLoad} />
					<ModalGateway>
						{this.state.isViewerOpen ? (
							<Modal onClose={this.closeLightbox} className="gallery-carousel">
								<Carousel
									className="gallery-carousel"
									currentIndex={this.state.currentImageIndex}
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
					which have to be cut to remove the parts. The parts then have to be sanded to hide the cuts where
					they were joined to the sprues, and then assembled. Many people like to apply decals which
					occasionally come with these kits, and many also like painting the kits to make them unique. I
					personally also like the challege of fitting small SMD LEDs into these mini robot model kits, since
					most of them are less than 6 inches in height and have full articulation. It really allows me to
					think of how to engineer the wiring in such a way which it not only works, but does not affect the
					articulation so they can remain posable.
				</p>
			</React.Fragment>
		);
	}
}
