document.addEventListener("DOMContentLoaded", function() {
	// Lock scrolling on page load
	document.body.classList.add('no-scroll');

	// Handle "Learn More" button click
	document.querySelector('.more.scrolly').addEventListener('click', function(event) {
		event.preventDefault();
		// Remove scroll lock
		document.body.classList.remove('no-scroll');
		// Optionally, scroll to the section
		document.querySelector('#one').scrollIntoView({ behavior: 'smooth' });
	});
});