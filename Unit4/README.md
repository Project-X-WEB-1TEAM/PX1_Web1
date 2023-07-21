Project-X_23_1차 테스트 Web 부문 5번 과제에 대한 README 입니다.

# **애플리케이션 제어를 위한 JavaScript 함수 개발하기**

## 요구사항

애플리케이션 제어를 위해 DOM, Form Controll 방법을 습득하고 사용자와 상호작용하기 위한 Event Handling 기법을 습득한다. 또한, JavaScript를 사용하는 방법 중 인라인 방식, <script> 태그 내에 정의 하는 방식, 별도의 파일로 개발하는 방식의 차이와 각 방식의 장단점을 학습한다.

- 애플리케이션 제어를 위해 index.js를 개발한다.
- 애플리케이션이 시작되면 본문 하단에 1초마다 현재 시간을 출력한다.
- 애플리케이션 제목을 클릭하면 본문 하단 현재 시간 아래에 클릭 카운트를 출력한다.
- 애플리케이션 제목을 클릭하면 DevTools Console 창에 클릭 카운트가 나타나도록 한다.
- 애플리케이션의 메인메뉴 또는 사이드메뉴를 클릭하면 메뉴항목(링크)가 활성/비활성 되도록 한다.
- 애플리케이션의 메인메뉴 또는 사이드메뉴를 클릭하면 DevTools Console 창에 활성/비활성 내용을 출력한다.
- 애플리케이션의 폼 전송 버튼을 클릭할 때 마다 각 입력 항목 내용이 객체로 변환되어 배열에 저장되도록 한다.
- 애플리케이션의 폼 전송 버튼을 클릭하면 Alert 창을 이용한 전송메시지를 출력한다.
- 애플리케이션의 폼 전송 버튼을 클릭하면 DevTools Console 창에 배열에 저장된 모든 객체를 출력한다.

## 개발환경

- 언어: HTML, CSS, JavaScript
- OS: MacOS
- WAS: Nginx
- IDEs: VScode

## TestCase

- 제공된 목록의 개발도구를 사용해야 한다.
- 개발환경에서 제공된 목록의 개발도구 중 선택하여 사용한다.
- 인라인 방식과 <script> 태그 내에 작성하는 방식은 사용하지 않는다.
- 현재 시간의 출력은 "YYYY년MM월DD일, HH시MM분SS초" 형식으로 한다.
- DevTools의 Console 출력을 이용한다.

## 요구사항에 따른 문제 해결 과정

- 본문 하단에 현재 시간과 클릭 카운트 추가
    
    ```jsx
    var timeDisplay = document.createElement("p");
    var clickCountDisplay = document.createElement("p");
    document.body.appendChild(timeDisplay);
    document.body.appendChild(clickCountDisplay);
    ```
    
    appendChild로 p태그 추가 후, setInterval과 click event추가로 내부 값 변경
    
    ```jsx
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
    
    document.querySelector("h1").addEventListener("click", function () {
        clickCount++;
        clickCountDisplay.innerText = "Title clicked " + clickCount + " times";
        console.log("Title clicked " + clickCount + " times");
    });
    ```
    
- 사이드 및 메인 메뉴 클릭시 활성화 비 활성화
    
    ```jsx
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
    ```
    
    각 a 태그에 click event를 추가해 active 속성을 토글로 변경 후 active일 때의 css를 추가
    
    ```jsx
    nav a.active, aside li a.active {
      color: yellow; /* Color when active */
      text-decoration: underline; /* Add underline when active */
    }
    ```
    
- 폼 전송 후 데이터 객체 저장 및 출력
    
    ```jsx
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
    ```
    
    form 태그에 summit event를 추가
    
    alert창 출력 및 배열 형태를 저장해 summit할 때 console로 출력 및 배열 추가