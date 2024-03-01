import React from 'react';
import Home from '../pages/home/index.jsx';
import Login from '../pages/login/index.jsx';
import Shop from '../pages/shop/index.jsx'
import ShopGoods from '../pages/shop/goods.jsx'


const basicRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop to='/shop/goods' />,
    children: [
      { path: 'goods', element: <ShopGoods /> },
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

export const blankPages = getPathList(blankRoutes) 