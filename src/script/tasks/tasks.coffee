`import html from "../../views/tasks/tasks.html";`

`var backend_url = process.env.BACKEND_URL || "http://localhost:5000/"`

tasks = new Tulipan(
  template:
    html: html
    async: false
  route:
    route: '/tasks'
    main: '#application'
  data:
    message: 'Hola mundo'
    tasks: []
  methods:
    after: ->
      @fetchTasks()
      return
    fetchTasks: ->
      apiKey = @$store.get('apiKey')
      @$dialog.show 'Fetching tasks...'
      @$http.get(backend_url + 'api/todos/', headers: 'X-API-KEY': apiKey).then ((res) ->
        console.log res
        data = res.data
        @$set 'tasks', data
        @$dialog.hide()
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
    deleteTask: (index) ->
      id = @tasks[index].id
      apiKey = @$store.get('apiKey')
      @$dialog.show 'Deleting task...'
      @$http.delete(backend_url + 'api/todos/' + id, headers: 'X-API-KEY': apiKey).then ((res) ->
        console.log res
        @$dialog.hide()
        @fetchTasks()
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
    createTask: ->
      @$router.navigate '/newtask'
      return
)