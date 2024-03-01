import Home from '../pages/home/index.jsx';
import Login from '../pages/login/index.jsx';
import Shop from '../pages/shop/index.jsx'
import ShopGoods from '../pages/shop/goods.jsx'
import ShopGoodsChild from '../pages/shop/goods-child.jsx'
import ShopPeople from '../pages/shop/people.jsx'
import { HomeOutlined, QqOutlined, TaobaoCircleOutlined, CodepenOutlined } from '@ant-design/icons'

const basicRoutes = [
  {
    path: '/',
    element: <Home />,
    meta: {
      title: '首页',
      icon: <HomeOutlined />
    }
  },
  {
    path: '/shop',
    element: <Shop to='/shop/goods' />,
    meta: {
      title: '商店',
      icon: <TaobaoCircleOutlined />,
    },
    children: [
      {
        path: 'people',
        element: <ShopPeople />,
        meta: {
          title: '店员',
          icon: <QqOutlined />
        },
      },
      {
        path: 'goods',
        element: <ShopGoods />,
        meta: {
          title: '商品',
          icon: <CodepenOutlined />
        },
        children: [
          {
            path: 'child',
            element: <ShopGoodsChild />,
            meta: {
              title: '子商品',
              icon: <CodepenOutlined />
            }
          },
        ]
      },
    ]
  },
];

const blankRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
]

const getPathList = (routes, rootPath = '') => {
  const pathList = [];
  routes.forEach(route => {
    const fullPath = rootPath + route.path;
    pathList.push(fullPath);

    if (route.children) {
      pathList.push(...getPathList(route.children, fullPath + '/'));
    }
  });

  return pathList;
};

export default [...basicRoutes, ...blankRoutes]

// 空白布局
export const blankPages = getPathList(blankRoutes)

// 菜单列表
const renderMenuItems = (route) => {
  const children = route.children?.length ? route.children.map(childRoute => renderMenuItems(childRoute)) : undefined
  return {
    key: route.path,
    label: route.meta.title,
    icon: route.meta.icon,
    children
  };
}
export const menus = basicRoutes.map(route => renderMenuItems(route))
