/* eslint-disable */
export default [
  { path: '/_ui', name: '_uiHome', component: (resolve) => { require(['@/views/_ui/Index.vue'], resolve) }, children: [
    { path: '/_ui/_uiDialog/messageBox', name: '_uiDialog', component: (resolve) => { require(['@/views/_ui/_uiDialog/Index.vue'], resolve) }, children: [
      { path: '/_ui/_uiDialog/messageBox', name: '_uiDialog-MessageBox', component: (resolve) => { require(['@/views/_ui/_uiDialog/MessageBox.vue'], resolve) } }
    ]}
  ]}
]
