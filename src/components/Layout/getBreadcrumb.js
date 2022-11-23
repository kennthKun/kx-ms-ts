import { TreeToArray, keySearchObj } from "@/utils"

export const getIconMenu = (ResourceList) => {
  const MenuList = TreeToArray(ResourceList, 'routes')
  const item = keySearchObj(MenuList, 'path', window.location.pathname)
  return item?.icon?.indexOf('kx-') >= 0 ? item?.icon : 'kx-caidanguanli'
}

export const getBreadcrumb = () => {
  const files = require.context('../../routes/childRoutes', false, /\.ts$/);
  const routeList = [];
  files.keys().forEach((key) => {
    const child = files(key).default;
    child.forEach((item) => {
      item.name && (routeList[item.path] = item.name)
    })
  });


  const pathname = window.location.pathname.split('/')
  pathname.shift()
  const Breadcrumb_list = []
  let path = ''
  pathname.forEach((key) => {
    path = `${path}/${key}`
    if (path == "/workBench") {
      Breadcrumb_list.push({
        name: "工作台",
        path: "/workBench/page"
      })
    } else {
      if (routeList[path]) {
        Breadcrumb_list.push({
          name: routeList[path],
          path
        })
      }
    }

  })
  return Breadcrumb_list
}