import LayoutWrapper from './layouts';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      {/* <Link to='/'>/[首页]</Link>
      <Link to='/shop/goods'>/shop[商店-商品]</Link>
      <Link to='/login'>/login[登录]</Link> */}
      <LayoutWrapper />
    </div>
  );
}

export default App;
