# push-server-lab
다양한 방식으로 푸시서버를 구현해봅니다.



## Comets

클라이언트-서버 모델을 따르는 웹 구조에서 기본적으로 서버는 클라이언트가 요청하지 않은 정보를 주는 법이 없다. 따라서 서버가 변경사항을 알아서 클라이언트에게 알려주는 푸시서버는 구현할 수 없(었)다. 이런 한계를 극복하고 푸시 서버처럼 동작하는 모델을 만들기 위한 편법을 comet이라 한다.

### Ajax Polling

클라이언트가 주기적으로 서버에 ajax call을 보내서 변경사항이 있는지를 확인하는 방식이다.

* Short Polling

    그저 단순하게 일정 주기로 계속 서버로 Ajax 요청을 보낸다. 단순 Ajax의 구현과 비슷한 수준으로 쉽게 구현할 수 있지만, 무의미한 http 요청이 너무 빈번하게 일어나므로 썩 좋은 방법은 아니다.

* Long Polling

    서버에서 변경이 생길 때까지 클라이언트가 요청을 끊지 않는다. Short polling 방식에 비해 http 요청의 횟수가 현저히 줄어들지만, 서버에서 변경이 일어나는 순간에 트래픽이 집중되는 문제가 있다.



## Standard Specifications

웹 표준에 등재된, 또는 곧 등재될 예정인 방법들이다. 구버전 브라우저에서는 제대로 동작하지 않을 수 있지만, 푸시서버를 구현하기 위한 가장 정석적인 방법이라 볼 수 있다.

### Web Socket



### SSE (Server-Sent Event)

W3C 표준으로, HTML과 Javascript만으로 구현 가능하다. 이 말인즉슨, 구버전 브라우저라 해도 polyfill 지원이 가능하다는 뜻이다.

https://spoqa.github.io/2014/01/20/sse.html

### Service Worker

슬랙, 페이스북 등 웹앱에서 요청하는 '알림 표시' 권한을 허용한 적이 있다면, 웹앱이 크롬을 통해 보내오는 알림창을 한 번쯤 봤을 것이다. 바로 이 푸시알림이 service worker를 통해 구현된다.

허용하는 브라우저에서만 가능. 크롬, 파폭, 오페라 가능. 엣지, 사파리 곧 지원.

https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ko

https://medium.com/@sejongdekang/node-js-fcm-%EC%9B%B9%EC%95%B1-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9B%8C%EC%BB%A4-%EC%9C%BC%EB%A1%9C-%ED%91%B8%EC%8B%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-43c49b761dba



## Firebase

파이어베이스에서 알아서 푸시서버 기능을 제공하는 방법이 있다고 한다. 좀 더 알아보도록 하자.