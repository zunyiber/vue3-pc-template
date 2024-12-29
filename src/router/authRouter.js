/**
 * 根据用户菜单权限设置路由
 * @param menuData
 */
/* -------------------------------------分割线-------------------------------------------- */
import layout from '../layout/index.vue'
import formTemplate1 from '../views/FormTemplate/template1.vue'
import formTemplate2 from '../views/FormTemplate/template2.vue'
import tableTemplate1 from '../views/TableTemplate/template1.vue'
import tableTemplate2 from '../views/TableTemplate/template2.vue'

const componentObj = {
  layout,
  formTemplate1,
  formTemplate2,
  tableTemplate1,
  tableTemplate2
}
const iconList = {
  formTemplate: 'Tickets',
  tableTemplate: 'CopyDocument'
}
/**
 * 动态添加用户路由权限
 * @param menuData json格式的字符串
 * @returns {[]}
 */
export function getAuthRouters(menuData) {
  const routerList = []
  let obj, children
  menuData && menuData.map(item => {
    obj = {
      path: item.path,
      component: layout,
      redirect: 'noRedirect',
      name: item.name,
      meta: {
        breadcrumbName: item.meta.title,
        icon: iconList[item.name]
      }
    }
    // 设置子菜单
    children = []
    item['children'].map(it => {
      children.push({
        path: it.path,
        component: componentObj[it.name],
        name: it.name, // 如果该组件需要缓存,这里的name属性请与组件的name保持一致
        meta: {
          breadcrumbName: it.meta.title,
          cached: true, // 是否需要缓存
          keepAlive: true
        }
      })
    })
    obj.children = children
    routerList.push(obj)
  })
  return routerList
}


