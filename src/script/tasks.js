
import html from "../views/tasks.html";

const backend_url = process.env.BACKEND_URL;

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

      this.$dialog.show("Fetching tasks...");
      
      this.$http.get(backend_url + 'api/todos/', {headers: {'X-API-KEY': apiKey}})
      .then(function (res){
        console.log(res);
        var data = res.data;
        this.$set("tasks", data);
        this.$dialog.hide();

      }, function(err){
        this.$dialog.hide();
        console.log(err);
      })
    },

    deleteTask: function(index){
      var id = this.tasks[index].id;

      var apiKey = this.$store.get("apiKey");

      this.$dialog.show("Deleting task...");

      this.$http.delete(backend_url + 'api/todos/' + id, {headers: {'X-API-KEY': apiKey}})
      .then(function (res){
        console.log(res);
        this.$dialog.hide();
        this.fetchTasks();
      }, function(err){
        this.$dialog.hide();
        console.log(err);
      })
    },

    createTask: function(){
      this.$router.navigate("/newtask");
    }
  }
})

export default tasks;