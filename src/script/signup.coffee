`import html from "../views/signup.html";`

`var backend_url = process.env.BACKEND_URL`

signup = new Tulipan(
  template:
    html: html
    async: false
  route: '/signup'
  data:
    username: ''
    password: ''
    email: ''
  methods:
    clear: ->
      @username = ''
      @password = ''
      @email = ''
      return
    leave: ->
      @clear()
      return
    signup: ->
      payload = 
        username: @username
        password: @password
        email: @email
      @$dialog.show 'Signing up...'
      @$http.post(backend_url + 'api/auth/signup', payload).then ((res) ->
        console.log res
        @$dialog.hide()
        @$router.navigate '/'
        return
      ), (err) ->
        @$dialog.hide()
        console.log err
        return
      return
)