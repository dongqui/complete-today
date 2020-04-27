<!-- ## [https://expo.io/@dongqui9/rn_weather](https://expo.io/@dongqui9/rn_weather) -->

## 2020-04-27
- 언제나 고민되는 폴더 구조.<br>
그래도 이제 취향이 생긴듯하다! 컴포넌트, 기능 단위로 모아 놓는게 폴더/파일 수를 줄이고 직관적으로 파일을 찾아갈 수 있어서 개인적으로 마음에 든다.<br>
Redux는 ducks구조로 모아놓고, 컴포넌트/스타일도 컴포넌트 단위로 붙여서 모아놨다.<br>
다만 screen, navigation은 단순 컴포넌트와는 구분해서 관리하는게 편할 거 같아서 따로 뺐다.

- react native의 Button 컴포넌트는 상당히 엄격한 성질을 가지고 있는 거 같다 ㅠㅠ <br> width, height도 제대로 안 먹혀서 TouchableOpacity를 이용해 커스텀 버튼을 만들었다.