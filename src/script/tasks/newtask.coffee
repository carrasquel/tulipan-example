`import html from "../../views/tasks/newtask.html"`

`var backend_url = process.env.BACKEND_URL || "http://localhost:5000/"`

newtask = new Tulipan(
  template:
    html: html
    async: false
  route:
    route: '/newtask'
    main: '#application'
  data: task: ''
  methods:
    after: ->
      @task = ''
      return
    pushTask: ->
      apiKey = @$store.get('apiKey')
      payload = task: @task
      @$dialog.show 'Adding Task...'
      @$http.post(backend_url + 'api/todos/', payload, headers: 'X-API-KEY': apiKey).then ((res) ->
        console.log res
        @$dialog.hide()
        @$router.navigate '/tasks'
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
)