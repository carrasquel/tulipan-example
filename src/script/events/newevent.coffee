`import html from "../../views/events/newevent.html";`

`var backend_url = process.env.BACKEND_URL || "http://localhost:5000/"`

newEvent = new Tulipan(
  template:
    html: html
    async: false
  route:
    route: '/newevent'
    main: '#application'
  data: 
    event:
      name: "",
      description: "",
      event_date: ""
  methods:
    after: ->
      @event = {}
      return
    pushEvent: ->
      apiKey = @$store.get('apiKey')
      payload = event: @event
      @$dialog.show 'Adding Event...'
      @$http.post(backend_url + 'api/events/', payload, headers: 'X-API-KEY': apiKey).then ((res) ->
        @$dialog.hide()
        @$router.navigate '/events'
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
)