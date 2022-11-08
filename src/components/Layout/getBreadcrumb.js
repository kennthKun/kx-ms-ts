export default () => {
  const files = require.context('../../routes/childRoutes', false, /\.ts$/);
  const routeList = [];
  files.keys().forEach((key) => {
    const child = files(key).default;
    child.forEach((item) => {
      routeList[item.path] = item.name
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
      Breadcrumb_list.push({
        name: routeList[path],
        path
      })
    }

  })
  return Breadcrumb_list
}