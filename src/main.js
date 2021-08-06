import html from "./views/login.html";

var app = new Tulipan({
    
    template: {
        html: html,
        async: false
    },

    route: "/",

    data: {
        username: "",
        password: ""
    },

    methods: {

        after: function(){
            var apiKey = this.$store.get("apiKey");

            if (apiKey){
                this.$router.navigate("/application");
            }
        },

        clear: function(){
            this.$set("username", "");
            this.$set("password", "");
        },

        login: function(){

            var payload = {
                username: this.username,
                password: this.password
            };

            this.$http.post("http://localhost:5000/api/auth/login", payload).then(function(res){
                // exito
                console.log(res);
                this.$store.set("apiKey", res.data.api_key);
                this.clear();
                this.$router.navigate("/application");
            }, function(err){
                // falla
                console.log(err);
            });
        }
    }
})


export default app;