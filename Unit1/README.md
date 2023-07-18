Project-X_23_1차 테스트 Web 부문 1번 과제에 대한 README 입니다.

# **프론트 엔드 개발 환경 구성과 설정하기**

## 요구사항

- 웹 서버를 설치하고, 포트를 설정하는 방법 습득
- 웹 서버를 시작하고, 웹 브라우저에서 정상적으로 시작하는지  확인
- 웹 서버를 중지하고, 웹 브라우저를 이용해 정상적으로 종료됐는지 확인
- 개발에 사용할 IDE를 선정하고 개발 환경을 설정

## 개발환경

- 언어: HTML, CSS, JavaScript
- OS: MacOS
- WAS: Nginx
- IDEs: VScode

## TestCase

- javac 명령어로 컴파일 정상여부를 확인
- java 명령어로 정의된 재고가 정상 출력되는지 확인

## 의문

- TestCase에 명시된, JavaC는 JAVA언어 컴파일러이고 해당 과제와 무관한 테스트 케이스이다.
- HTML, CSS, JavaScript를 배운다고 했지만 java 명령어를 활용하라는 테스트 케이스가 있다.
- 재고를 출력하라는 테스트 케이스가 있지만, 재고가 어떤 재고를 뜻하는 건지 명시된 문제에서는 찾을 수 없다.

## 요구사항에 따른 문제 해결 과정

- 웹 서버를 설치하고, 포트를 설정하는 방법 습득
    - Mac에서 `Brew install Nginx` 명령을 활용해 Nginx 설치 후 `brew info nginx` 를 활용해 포트와 루트 경로에 표시될 html 파일 경로를 체크했다.
        - Docroot is: /usr/local/var/www
            - nginx 구동에 사용되는 문서들의 경로를 작업 경로에 심볼릭 링크로 연결해 작업했습니다.
                - `ln -s /usr/local/var/www [작업 경로]`
        - config 파일: /usr/local/etc/nginx/nginx.conf
            - config 파일을 수정해 기본값인 8080포트에서 80포트로 변경했다.
- 웹 서버를 시작하고, 웹 브라우저에서 정상적으로 시작하는지  확인
- 웹 서버를 중지하고, 웹 브라우저를 이용해 정상적으로 종료됐는지 확인
    - nginx 시작 명령어과 종료 명령어는 다음과 같다.
        - 시작
            - `nginx`
        - 종료
            - 강제 종료: `nginx -s stop`
            - 정상 종료: `nginx -s quit`
        - 재구동
            - `nginx -s reload`
- 개발에 사용할 IDE를 선정하고 개발 환경을 설정