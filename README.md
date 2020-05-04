<!-- ## [https://expo.io/@dongqui9/rn_weather](https://expo.io/@dongqui9/rn_weather) -->

## 2020-04-27
- 언제나 고민되는 폴더 구조.<br>
그래도 이제 취향이 생긴듯하다! 컴포넌트, 기능 단위로 모아 놓는게 폴더/파일 수를 줄이고 직관적으로 파일을 찾아갈 수 있어서 개인적으로 마음에 든다.<br>
Redux는 ducks구조로 모아놓고, 컴포넌트/스타일도 컴포넌트 단위로 붙여서 모아놨다.<br>
다만 screen, navigation은 단순 컴포넌트와는 구분해서 관리하는게 편할 거 같아서 따로 뺐다.

- react native의 Button 컴포넌트는 상당히 엄격한 성질을 가지고 있는 거 같다 ㅠㅠ <br> width, height도 제대로 안 먹혀서 TouchableOpacity를 이용해 커스텀 버튼을 만들었다.

## 2020-04-29
- 시작하자마자 버그 속출 ㅎㅎ<br>
  - 안드로이드랑 ios 동작이 다르다. 키보드가 올라올 때 안드로이드는 앱 화면을 같이 올려 버리는데, IOS는 덮어버린다.<br>
    이건 해결 가능해 보이긴 하는데, 뭔가 시작하자마자 OS 차이가 나타나니까 앞으로가 두렵다.
  - TextInput에 focus된 상태로 submit버튼을 누르면 focus가 풀리면서 키보드가 내려가고 끝. 버튼을 두 번 눌러야 함 ㅠㅠ<br>
    처음엔 되게 쉽고 흔한 문제인줄 알았는데, 검색해도 안 나온다. 앱 전체에 영향을 주는 것은 아니니 일단 넘어가기로 함.<br>
    키보드 핸들링에 관한 문제인 것인지, TextInput 핸들링에 관한 문제인 것인지, 아니면 화면에 대한 tap이벤트 핸들링 문제인지 확인 필요할듯.
    
## 2020-05-01
- react native에 맞는 DB를 검색하고 있다.
  - Async Storage
    - 사실상 제일 무난하고 이 프로젝트에 적합해 보임. React native용으로 잘 구현되어 있어서 Doc에서도 추천하고, 데이터 구조도 단순해서 간편하게 쓰기 좋을 거 같다. 그런데 용량 제한이 5mb... 5mb가 어느 정도의 크기인지 잘 모르겠다...ㅠ 조사 필요.
    - Firebase 같은거 붙여서 backup 놔두고 계속 비우면서 사용하는 방법도..?
  - 그 외에 Realm, MelonDB 등도 있었는데 성능은 좋아보이지만 굳이..? 싶은 마음도    있고 자체적으로 제공하는 api를 또 학습해야함.
  - Sqlite
    - Android, IOS 네이티브에 각각 설정해야하는 모습이 보여서 일단은 보류. 최대한 단순하게 완성하고 싶다...
  

  ## 2020-05-04
  - thunk 사용
    - redux-thunk랑 redux-saga랑 고민했는데, 역시나 이번 프로젝트는 react-native로 빠르게 앱을 완성시켜보자라는 목적에 맞게 간단한 thunk로 결정.
      - thunk는 사실상 액션에 dispatch, getState만 주입해주는 정도로 보인다. 정말 가벼움! 
      - saga는 비동기 처리도 제너레이터를 이용해 순수함수를 이용할 수 있어 테스트에도 용이하고 thunk와 가장 큰 차이는 store를 구독한다는 점! saga는 특정 액션이 발생하면 거기에 맞게 반응이 가능하다. 조금 더 정교한 기능이 필요하면 saga를 쓰는 게 맞을 거 같다(?)