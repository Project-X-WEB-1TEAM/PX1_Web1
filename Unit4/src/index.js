window.onload = function() {
    var clickCount = 0;
    var formInputs = [];
    
    // Display the current time every second
    setInterval(function() {
        var currentTime = new Date().toLocaleTimeString();
        console.log(currentTime);
    }, 1000);

    // Increase click count when title is clicked
    document.querySelector('h1').addEventListener('click', function() {
        clickCount++;
        console.log("Title clicked " + clickCount + " times");
    });

    // Toggle menu links and log to console when clicked
    var menuLinks = document.querySelectorAll('nav a, aside a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            console.log(this.textContent + " is " + (this.classList.contains('active') ? 'active' : 'inactive'));
        });
    });

    // Handle form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        var formData = {};
        var inputs = e.target.querySelectorAll('input');
        inputs.forEach(function(input) {
            formData[input.id] = input.value;
        });
        formInputs.push(formData);
        alert('Form submitted');
        console.log(formInputs);
    });
};
