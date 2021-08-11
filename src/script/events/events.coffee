`import html from "../../views/events/events.html";`

`var backend_url = process.env.BACKEND_URL || "http://localhost:5000/"`

events = new Tulipan(
  template:
    html: html
    async: false
  route:
    route: '/events'
    main: '#application'
  data:
    message: 'Hola mundo'
    events: []
  methods:
    after: ->
      @fetchEvents()
      return
    fetchEvents: ->
      apiKey = @$store.get('apiKey')
      @$dialog.show 'Fetching events...'
      @$http.get(backend_url + 'api/events/', headers: 'X-API-KEY': apiKey).then ((res) ->
        console.log res
        data = res.data
        @$set 'events', data
        @$dialog.hide()
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
    deleteEvent: (index) ->
      id = @events[index].id
      apiKey = @$store.get('apiKey')
      @$dialog.show 'Deleting event...'
      @$http.delete(backend_url + 'api/events/' + id, headers: 'X-API-KEY': apiKey).then ((res) ->
        console.log res
        @$dialog.hide()
        @fetchEvents()
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
    createEvent: ->
      @$router.navigate '/newevent'
      return
)