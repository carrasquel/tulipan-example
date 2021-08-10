`import html from "./views/login.html";`

`var backend_url = process.env.BACKEND_URL`

app = new Tulipan(
  template:
    html: html
    async: false
  route: '/'
  data:
    username: ''
    password: ''
  methods:
    after: ->
      apiKey = @$store.get('apiKey')
      if apiKey
        @$router.navigate '/application'
      return
    clear: ->
      @$set 'username', ''
      @$set 'password', ''
      return
    login: ->
      payload = 
        username: @username
        password: @password
      @$dialog.show 'Loging in...'
      @$http.post(backend_url + 'api/auth/login', payload).then ((res) ->
        console.log res
        @$store.set 'apiKey', res.data.api_key
        @clear()
        @$dialog.hide()
        @$router.navigate '/application'
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
)