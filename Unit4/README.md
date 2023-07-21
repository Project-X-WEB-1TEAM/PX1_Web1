Project-X_23_1차 테스트 Web 부문 4번 과제에 대한 README 입니다.

# **애플리케이션 제어를 위한 JavaScript 함수 개발하기**

## 요구사항

애플리케이션 제어를 위한 JavaScript 문법을 이해하고 브라우저 내장 DevTools의 사용방법을 이해하고 활용한다.

- <script> 태그를 이용하여 JavaScript를 이용하는 방법을 이해한다.
- JavaScript의 기본 문법과 데이터타입을 이해하고 활용한다.
- JavaScript의 변수 스코프를 이해하고 활용한다.
- JavaScript의 제어문을 활용한 흐름 제어를 이해하고 활용한다.
- JavaScript의 함수 정의 방법을 이해하고 활용한다.
- JavaScript의 객체 정의 방법을 이해하고 활용한다.
- ES6 문법을 이해하고 활용한다.

## 개발환경

- 언어: HTML, CSS, JavaScript
- OS: MacOS
- WAS: Nginx
- IDEs: VScode

## TestCase

- 제공된 목록의 개발도구를 사용해야 한다.
- JavaScript에서 제공하는 다양한 변수 사용법을 이용하여 변수를 선언하고 초기화한다.
- 선언적 함수와 익명함수를 각각 정의하여 호출한다.
- 속성을 가진 객체를 정의하여 객체의 정보를 출력한다.
- 프로토타입 기반의 상속과 클래스 기반의 상속을 구현한다.
- 모든 출력은 DevTools의 Console 출력을 이용한다.

## 요구사항에 따른 문제 해결 과정

- JavaScript의 변수 선언은 `var, let, const`  세 가지 방식이 있습니다.
    - var
        - 가장 오래된 변수 선언자로 함수 스코프(함수 내부에서 선언하면 함수 내부에서만 사용가능한 변수로, 함수 외부에 선언하면 전역변수로 작동)를 갖습니다.
        - 해당 스코프의 최상단으로 호이스팅됩니다. 호이스팅 된 이후로 할당이 될 때까지 undefined 값을 갖습니다.
    - let
        - ES6 이후로 나온 변수 선언자로 블록 스코프(블록 {} 내부에서만 유효한 변수로 작동)를 갖습니다.
        - 해당 블록의 최 상단으로 호이스팅되지만 초기화되지 않습니다. 선언 할당하기 전에 접근하게 되면 ReferenceError가 발생합니다.
    - const
        - ES6 이후로 나온 변수 선언자로 블록 스코프(블록 {} 내부에서만 유효한 변수로 작동)를 갖습니다.
        - let과 마찬가지로 최상단으로 호이스팅되지만 초기화 되지 않습니다.
        - var, let과 달리 재할당이 되지 않아 상수를 선언하기 위해 쓰입니다.
- JavaScript의 함수 선언은 익명, 선언 두 가지 방식이 있습니다.
    - 선언적 함수
        - 함수의 이름을 따로 명시하는 경우
            
            ```cpp
            function callConsoleLog2() {
              var var1 = 1;
              let var2 = 2;
              const var3 = 3;
              var4 = 4;
              if (var4 === 4)
                console.log("var4는 4입니다.");
              console.log("선언적 함수 선언 입니다.");
            }
            ```
            
    - 익명 함수
        - 함수의 이름을 명시하지 않는 경우
        
        ```cpp
        //익명 함수를 callConsoleLog라는 변수에 저장
        const callConsoleLog = () => {
          var var1 = 1;
          let var2 = 2;
          const var3 = 3;
          var4 = 4;
          console.log("익명 함수 선언 입니다.");
        };
        ```
        
- JavaScript의 객체
    
    ```cpp
    const Object1 = {
        Object: "객체 속성",
        Print: "출력 입니다.",
        Number: 2,
      };
    ```
    
- JavaScript의 클래스 선언과 상속
    
    ```cpp
    // 프로토 타입으로 상속
    const Dog = Object.create(Animal);
    Dog.breed = "라브라도";
    Dog.speak = function () {
      console.log(`${this.name}이(가) 짖습니다. 프로토 타입 상속.`);
    };
    
    const myDog = Object.create(Dog);
    myDog.name = "맥스";
    myDog.speak();
    
    // 클래스로 상속
    class Animal2 {
      constructor(name) {
        this.name = name;
      }
    
      speak() {
        console.log(`${this.name}이(가) 소리를 냅니다.`);
      }
    }
    
    class Dog2 extends Animal2 {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
    
      speak() {
        console.log(`${this.name}이(가) 짖습니다. 클래스 상속.`);
      }
    }
    ```