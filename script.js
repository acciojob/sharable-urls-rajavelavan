// your code here
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const urlHeader = document.getElementById('url');
const form = document.getElementById('inputForm');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
    const baseUrl = "https://localhost:8080/";
    const params = [];

    const nameValue = nameInput.value.trim();
    const yearValue = yearInput.value.trim();

    if (nameValue) {
        params.push(`name=${nameValue}`);
    }
    if (yearValue) {
        params.push(`year=${yearValue}`);
    }

    if (params.length > 0) {
        urlHeader.textContent = `${baseUrl}?${params.join('&')}`;
    } else {
        urlHeader.textContent = baseUrl;
    }
});