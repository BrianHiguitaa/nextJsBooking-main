import Footer from "./Footer";
import Config from './Config'
 
const Layout = ({ children, story }) => ( 
  <div>
    {story && story.content ? <Config blok={story.content} /> : null}
      {children}
    <Footer />
  </div>
);
 
export default Layout;
