import Footer from "./components/footer.js";
import PostInput from "./components/PostInput.js";
import LoginPage from "./pages/LoginPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import ErrorPage from "./pages/ErrorPage.js";
import { state, checkLoginStatus } from "./state/state.js";

const handleLogout = () => {
  localStorage.removeItem("user");
  state.loggedIn = false; // 로그아웃 상태로 변경
  location.hash = "#/login";
  render();
};

const Header = () => {
  const { hash } = location;

  return /*html*/ `
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14" tagItem="tab">
        <ul class="flex justify-around">
          <li><a href="#/" class="${hash === "#/" ? "text-blue-600" : "text-gray-600"}" tagItem="nav">홈</a></li>
        ${
          state.loggedIn
            ? `
          <li><a href="#/profile" class="${hash === "#/profile" ? "text-blue-600" : "text-gray-600"}" tagItem="nav">프로필</a></li>
          <li><a href="/logout" id="logout" class="text-gray-600" tagItem="nav">로그아웃</a></li>
        `
            : `
          <li><a href="#/login" class="text-gray-600" tagItem="nav">로그인</a></li>
        `
        }
        </ul>
      </nav>
`;
};

const MainPage = () => /*html*/ `
  <div id="root">
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">

      ${Header()}

      <main class="p-4">

      ${state.loggedIn ? PostInput() : ""}

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>

      ${Footer()}
    </div>
  </div>
</div>
`;

// const ErrorPage = () => /*html*/ `
//   <div id="root">
//   <main class="bg-gray-100 flex items-center justify-center min-h-screen">
//     <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
//       <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
//       <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
//       <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
//       <p class="text-gray-600 mb-8">
//         요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
//       </p>
//       <a href="#/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
//         홈으로 돌아가기
//       </a>
//     </div>
//   </main>
// </div>
// `;

const handleSubmit = (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = ""; // 필요하다면 적절한 이메일 값을 설정
  const bio = ""; // 필요하다면 적절한 bio 값을 설정

  // 사용자 정보를 로컬스토리지에 저장
  localStorage.setItem("user", JSON.stringify({ username, email, bio }));

  checkLoginStatus();
  // 상태 변경 후 페이지 이동
  location.hash = "#/profile";
  render();
};

const handleProfileSubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;

  console.log(username, email, bio);

  localStorage.setItem("user", JSON.stringify({ username, email, bio }));

  alert("프로필이 업데이트 되었습니다.");
};

const App = () => {
  checkLoginStatus();

  const route = location.hash.replace("#", "") || "/";

  if (route === "/profile") {
    if (!state.loggedIn) {
      // user가 없으면 로그인 페이지로 리디렉션
      location.hash = "#/login";
      return LoginPage();
    }
    return ProfilePage();
  }

  if (route === "/login") {
    if (state.loggedIn) {
      // 로그인 상태에서 로그인 페이지로 접근하면 메인 페이지로 리디렉션
      location.hash = "#/";
      return MainPage();
    }
    return LoginPage();
  }

  if (route === "/logout") {
    handleLogout();
    return LoginPage();
  }

  if (route === "/") {
    return MainPage();
  }

  return ErrorPage();
};

const render = () => {
  document.body.innerHTML = App();

  // 로그인 폼 이벤트 바인딩
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  // 프로필 수정 폼 이벤트 바인딩
  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", handleProfileSubmit);
  }

  // 로그아웃 버튼 클릭 이벤트 추가
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }
};

// 페이지 전환 시 새로고침을 방지하고 상태 업데이트를 하도록 수정
window.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault(); // 새로고침 방지

    const href = e.target.getAttribute("href");
    if (!href) return;

    location.hash = href; // 해시 변경
    render(); // 페이지를 새로 렌더링
  }
});

// 해시 변경을 감지하여 자동으로 렌더링
window.addEventListener("hashchange", render);

// SPA의 초기 렌더링
render();
