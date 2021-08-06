import html from "../views/newtask.html";

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
  
        this.$http.post('http://localhost:5000/api/todos/', payload, {headers: {'X-API-KEY': apiKey}})
        .then(function (res){
          console.log(res);
          this.$router.navigate("/tasks");
        }, function(err){
          console.log(err);
        })
      }
    }
  })

  export default newTask;