import html from "../views/newtask.html";

const backend_url = process.env.BACKEND_URL;

var newTask = new Tulipan({
    
    template: {
      // url: "views/newtask.html",
      html: html,
      async: false
    },
  
    route: {
      route: "/newtask",
      main: "#application"
    },
  
    data: {
      task: ""
    },
  
    methods: {
  
      after: function(){
        this.task = "";
      },

      pushTask: function(){
        var apiKey = this.$store.get("apiKey");

        var payload = {
          task: this.task
        }

        this.$dialog.show("Adding Task...");
  
        this.$http.post(backend_url + 'api/todos/', payload, {headers: {'X-API-KEY': apiKey}})
        .then(function (res){
          console.log(res);
          this.$dialog.hide();
          this.$router.navigate("/tasks");
        }, function(err){
          this.$dialog.hide();
          console.log(err);
        })
      }
    }
  })

  export default newTask;