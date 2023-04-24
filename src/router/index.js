import { createRouter, createWebHistory } from 'vue-router'
// import Admin from '@/layout/admin.vue'
// import Index from '@/views/index.vue'
// import Login from '@/views/login/index.vue'
// import NotFound from '@/views/404.vue'
// import Notice from '@/views/notice/index.vue';
// import Log from '@/views/log/index.vue'

const routes = [
  {
    path: '/',
    name: 'admin',
    // component: Admin,
    // 子路由
    children: [
      {
        path: '/',
        name: 'index',
        // component: NotFound,
        meta: {
          title: '仪表盘'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // component: Login,
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound'
    // component: Index
  }
]

// const asyncRoutes = [
// 	{
// 		path: '/',
// 		name: 'index',
// 		component: Index,
// 		meta: {
// 			title: '仪表盘'
// 		}
// 	},
// 	{
// 		path: '/sys/menu/index',
// 		name: 'menu',
// 		// component: Menu,
// 		meta: {
// 			title: '菜单管理'
// 		}
// 	},
// 	{
// 		path: '/sys/role/index',
// 		name: 'role',
// 		// component: Role,
// 		meta: {
// 			title: '角色管理'
// 		}
// 	},
// 	{
// 		path: '/sys/user/index',
// 		name: 'user',
// 		// component:User,
// 		meta: {
// 			title: '用户管理'
// 		}
// 	},
// 	{
// 		path: '/goods/index',
// 		name: 'goods',
// 		// component: Goods,
// 		meta: {
// 			title: '商品管理'
// 		}
// 	},
// 	{
// 		path: '/order/index',
// 		name: 'order',
// 		// component: Order,
// 		meta: {
// 			title: '订单管理'
// 		}
// 	},
// 	{
// 		path: '/notice/index',
// 		name: 'notice',
// 		component: Notice,
// 		meta: {
// 			title: '通知管理'
// 		}
// 	},
// 	{
// 		path: '/docs/index',
// 		name: 'docs',
// 		// component: Docs,
// 		meta: {
// 			title: '接口文档'
// 		}
// 	},
// 	{
// 		path: '/log/index',
// 		name: 'log',
// 		component: Log,
// 		meta:{
// 			title: '日志'
// 		}
// 	}

// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// export function addRoutes(menus) {
// 	let hadNewRoutes = false
// 	const findAndAddRoutesByMenus = arr => {
// 		arr.forEach(e => {
// 			let item = asyncRoutes.find(o => o.path == e.url)
// 			if (item && !router.hasRoute(item.path)) {
// 				router.addRoute('admin', item)
// 				hadNewRoutes = true
// 			}
// 			if (e.children && e.children.length > 0) {
// 				findAndAddRoutesByMenus(e.children)
// 			}
// 		})
// 	}
// 	findAndAddRoutesByMenus(menus)
// 	return hadNewRoutes
// }

export default router
