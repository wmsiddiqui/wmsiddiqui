import React from 'react';
import './resume.css';
import { Modal, Button } from 'react-bootstrap';

const RESUME_LINK =
	'https://docs.google.com/document/d/e/2PACX-1vTtwq5yWPSxvxuv756fS97RkCx4JrLrHzX4IClA0B9kWS5ZuiDZeF5euFwj_JZVeQtn5GlBra0M6Rbp/pub?embedded=true';

export default function() {
	return (
		<React.Fragment>
			<h1>Resume</h1>
			<span>This page is for my resume.</span>
			<br />
			<Modal>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary">Close</Button>
					<Button variant="primary">Save Changes</Button>
				</Modal.Footer>
			</Modal>
			<div className="frame-container">
				<iframe title="Resume" src={RESUME_LINK} />
			</div>
		</React.Fragment>
	);
}
