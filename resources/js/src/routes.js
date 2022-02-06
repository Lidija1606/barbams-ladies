import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import { Blacklist } from './views/Pages/Blacklist/Blacklist'

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Orders = React.lazy(() => import('./views/Pages/Orders'));
const Products = React.lazy(() => import('./views/Pages/Products'));
const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/orders', name: 'Orders', component: Orders },
  { path: '/dashboard/products', name: 'Products', component: Products },
  { path: '/dashboard/blacklist', name: 'Blacklist', component: Blacklist },
  // { path: '/dashboard/products/list', name: 'Products', component: Products },
  // { path: '/dashboard/products/price', name: 'Product Prices', component: ProductPrices },
]

export default routes;