# Kernel Rent

<img src="./doc/images/introduce.gif" />

---

## 1. 컴포넌트 설계 시 고려했던 부분

1. 다른 팀원이 해당 컴포넌트를 사용할 때, 컴포넌트의 역할을 직관적이고 빠르게 파악할 수 있는 명확한 구조 설계
2. styled-components를 사용할 때 각 스타일 컴포넌트의 역할이 명확히 드러나도록 네이밍
3. 재사용 가능성이 있는 작은 단위의 컴포넌트는 분리
4. 디자인이 변경될 수 있다는 점을 고려해 변화에도 대응할 수 있도록 설계 (가로 배치가 세로로 바뀌는 등)
5. 비슷한 디자인은 `theme` 및 `mode` `props`로 분기 처리하여 중복을 최소화

---

## 2. 폴더 구조 및 컴포넌트 구조 요약

```text
📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📂car
 ┃ ┃ ┣ 📜CarList.jsx
 ┃ ┃ ┣ 📜CarPrice.jsx
 ┃ ┃ ┣ 📜CarSpecItem.jsx
 ┃ ┃ ┗ 📜RentalCarCard.jsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜CircleButton.jsx
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┗ 📂rental
 ┃ ┃ ┣ 📂scheduler
 ┃ ┃ ┃ ┣ 📜RentalScheduler.jsx
 ┃ ┃ ┃ ┣ 📜RentalSchedulerGroup.jsx
 ┃ ┃ ┃ ┗ 📜SelectionItem.jsx
 ┃ ┃ ┗ 📜RentalPromotionCard.jsx
 ┣ 📂constants
 ┃ ┣ 📜style.js
 ┃ ┗ 📜text.js
 ┣ 📂layouts
 ┃ ┗ 📜Layout.jsx
 ┣ 📂mock
 ┣ 📂pages
 ┃ ┗ 📜MainPage.jsx
 ┣ 📂routers
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.jsx
 ┣ 📜App.jsx
 ┗ 📜index.js
```

---

## 3. 설계 이유 및 목적

- 각 파일이 맡은 역할에 따라 폴더를 분리하고, 중복을 줄이기 위해 `constants`, `layout`, `styles` 폴더 생성
- 컴포넌트는 다른 개발자가 필요한 컴포넌트를 쉽게 찾을 수 있도록 Feature 기준으로 분리
- 공통 컴포넌트는 `common`에, 차량 관련은 `car`에, 렌트 관련은 `rental` 폴더로 관리

---

## 4. 내가 만든 컴포넌트들의 재사용성에 대해 스스로 평가해보기

현재는 컴포넌트 수가 많지 않아 재사용하기에 큰 어려움은 없을 것 같지만, `CircleButton` 같은 여러 곳에서 사용될 수 있는 컴포넌트의 경우 더 검토가 필요하다고 생각함

현재 디자인에 맞춰 스타일과 구조를 작성하다 보니, 테두리 색상이나 크기를 다르게 써야 할 때는 새로운 컴포넌트를 만들어야 할 가능성이 있음

특히 `width`나 `height`를 `px`로 고정해둔 부분들은 다른 상황에서 원하는 대로 동작하지 않을 수 있어 더 고민이 필요하다고 느낌

---

## 5. 컴포넌트를 설계하며 어려웠던 점

재사용성을 고려하면서도 현재 디자인 요구사항을 만족시켜야 해서, 스타일이나 배치 등을 어디까지 유연하게 가져가야 할지 판단하기 어려웠음 (스타일을 컴포넌트 내부 혹은 외부에서 처리해야하는지 등)

또 컴포넌트를 어느 수준까지 쪼개야 할지도 고민이었는데, 너무 작게 나누면 오히려 사용하는 입장에서 여러 파일을 왔다 갔다 해야 해서 사용성이 떨어진다는 느낌을 받음

현재는 퍼블리싱 위주의 작업이지만, 실제 프로젝트라면 데이터나 이벤트 처리를 위한 props 설계도 더 깊이 고민해봐야 할 것 같음
