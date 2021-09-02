import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Dev Blog</h1>
      <ul className="nav-menu">
        <Link className="nav-link" to="/blogs/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/blogs/about">
          <li>About</li>
        </Link>
        <Link className="nav-link" to="/blogs/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
