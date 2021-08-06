
import html from "../views/tasks.html";

var tasks = new Tulipan({
    
  template: {
    // url: "views/tasks.html",
    html: html,
    async: false
  },

  route: {
    route: "/tasks",
    main: "#application"
  },

  data: {
    message: "Hola mundo",
    tasks: []
  },

  methods: {

    after: function(){
      this.fetchTasks();
    },

    fetchTasks: function(){
      var apiKey = this.$store.get("apiKey");

      this.$http.get('http://localhost:5000/api/todos/', {headers: {'X-API-KEY': apiKey}})
      .then(function (res){
        console.log(res);
        var data = res.data;
        this.$set("tasks", data);
      }, function(err){
        console.log(err);
      })
    },

    deleteTask: function(index){
      var id = this.tasks[index].id;

      var apiKey = this.$store.get("apiKey");

      this.$http.delete('http://localhost:5000/api/todos/' + id, {headers: {'X-API-KEY': apiKey}})
      .then(function (res){
        console.log(res);
        this.fetchTasks();
      }, function(err){
        console.log(err);
      })
    },

    createTask: function(){
      this.$router.navigate("/newtask");
    }
  }
})

export default tasks;