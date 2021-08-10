import html from "./views/login.html";

const backend_url = process.env.BACKEND_URL;

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

            this.$dialog.show("Loging in...");

            this.$http.post(backend_url + "api/auth/login", payload).then(function(res){

                console.log(res);
                this.$store.set("apiKey", res.data.api_key);
                this.clear();
                this.$dialog.hide();
                this.$router.navigate("/application");
            }, function(err){
                
                this.$dialog.hide();
                console.log(err);
            });
        }
    }
})


export default app;