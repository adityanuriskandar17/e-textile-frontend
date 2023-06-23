import Logo from "./Logo";

const menus = [
  { href: "/", text: "Home" },
  { href: "/about", text: "Contact" },
  { href: "/contact", text: "About" },
  { href: "/contact", text: "Sign Up" },
];

function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <div className="flex items-center">
          <Logo />
          <nav className="block px-[198px]">
            <ul className="flex space-x-2">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.href}>
                    <p className="px-3 py-2 leading-[160%] text-4 font-poppins">
                      {menu.text}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <form className="px-6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img src="/images/search.svg" alt="Whistlist" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[243px] h-[38px] p-4 pr-10 text-sm text-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F5F5F5] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you looking for ?"
                required=""
              />
            </div>
          </form>
          <div className="flex space-x-4 items-center">
            <a href="/">
              <img src="/images/whistlist.svg" alt="Whistlist" />
            </a>
            <a a href="/">
              <img src="/images/cart.svg" alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
