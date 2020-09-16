const Highlight = (props) => (
  <span className={`relative highlight highlight-${props.color}`}>
    <span className="relative z-2">{props.children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      <Highlight color="aqua">Lost in Tokyo</Highlight> is a directory of fun
      places to see, play in and <Highlight color="yellow">explore</Highlight>,
      in <Highlight color="blue">Tokyo</Highlight>, Japan.{" "}
    </div>
    <div className="mb3">
      From <Highlight color="blue">museums</Highlight> and{" "}
      <Highlight color="blue">galleries</Highlight>, to{" "}
      <Highlight color="pink">Robot Restaurants</Highlight> and{" "}
      <Highlight color="pink">kitten cafes</Highlight>, Tokyo is the gift that
      keeps on giving. <Highlight color="yellow">Dattebayo!</Highlight>{" "}
    </div>
  </div>
);

const NavItem = (props) => (
  <li className={`mh2-ns f6 f4-1 tc ${props.className}`}>
    <a className="white no-underline" href={props.href}>
      {props.children}
    </a>
  </li>
);

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map((item) => (
        <NavItem {...item} />
      ))}
    </ul>
  </nav>
);

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {}
      <Nav />
      <Intro />
      {}
    </div>
    <div className="flex flex-wrap container">{}</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
