`import html from "../views/application.html";`

application = new Tulipan(
  el: '#application'
  template:
    html: html
    async: false
  route: '/application'
  data: {}
  methods:
    after: ->
      @$router.navigate '/tasks'
      return
    exit: ->
      @$store.remove 'apiKey'
      @$router.navigate '/'
      return
)