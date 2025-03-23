export const Header = () => {
  const { pathname } = location;

  return `
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14" tagItem="tab">
        <ul class="flex justify-around">
          <li><a href="/" class="${pathname === "/" ? "text-blue-600" : "text-gray-600"}" tagItem="nav">홈</a></li>
          <li><a href="/profile" class="${pathname === "/profile" ? "text-blue-600" : "text-gray-600"}" tagItem="nav">프로필</a></li>
          <li><a href="/logout" class="text-gray-600" tagItem="nav">로그아웃</a></li>
        </ul>
      </nav>
`;
};
