window.onload = function () {
    var clickCount = 0;
    var formInputs = [];
  
    // Create elements for displaying time and click count
    var timeDisplay = document.createElement("p");
    var clickCountDisplay = document.createElement("p");
    document.body.appendChild(timeDisplay);
    document.body.appendChild(clickCountDisplay);
  
    // Display the current time every second
    setInterval(function () {
      var now = new Date();
      var formattedTime =
        now.getFullYear() +
        "년" +
        (now.getMonth() + 1).toString().padStart(2, "0") +
        "월" +
        now.getDate().toString().padStart(2, "0") +
        "일, " +
        now.getHours().toString().padStart(2, "0") +
        "시" +
        now.getMinutes().toString().padStart(2, "0") +
        "분" +
        now.getSeconds().toString().padStart(2, "0") +
        "초";
      timeDisplay.innerText = "Current Time: " + formattedTime;
    }, 1000);
  
    // Increase click count when title is clicked
    document.querySelector("h1").addEventListener("click", function () {
      clickCount++;
      clickCountDisplay.innerText = "Title clicked " + clickCount + " times";
      console.log("Title clicked " + clickCount + " times");
    });
  
    // Toggle menu links and log to console when clicked
    var menuLinks = document.querySelectorAll("nav a, aside li a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        console.log(
          this.textContent +
            " is " +
            (this.classList.contains("active") ? "active" : "inactive")
        );
      });
    });
  
    // Handle form submission
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var formData = {};
      var inputs = e.target.querySelectorAll("input");
      inputs.forEach(function (input) {
        formData[input.id] = input.value;
      });
      formInputs.push(formData);
      alert("Form submitted");
      console.log(formInputs);
    });
  };
  