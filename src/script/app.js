import html from "../views/application.html";


var application = new Tulipan({

    el: "#application",

    template: {
        // url: "views/application.html",
        html: html,
        async: false
    },

    route: "/application",

    data: {
    
    },

    methods: {

        after: function(){
            this.$router.navigate("/tasks");
        },

        exit: function(){
            this.$store.remove("apiKey");
            this.$router.navigate("/");
        }

    }
})

export default application;