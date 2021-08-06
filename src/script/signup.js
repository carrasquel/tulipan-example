import html from "../views/signup.html";

var signup = new Tulipan({
    template: {
        // url: "views/signup.html",
        html: html,
        async: false
    },

    route: "/signup",

    data: {
        username: "",
        password: "",
        email: ""
    },

    methods: {

        clear: function(){
            this.username = "",
            this.password = "",
            this.email = ""
        },

        leave: function(){
            this.clear();
        },

        signup: function(){

            var payload = {
                username: this.username,
                password: this.password,
                email: this.email
            }

            this.$http.post("http://localhost:5000/api/auth/signup", payload).then(function(res){
                // exito
                console.log(res);
                this.$router.navigate("/");
            }, function(err){
                // falla
                console.log(err);
            });
        }
    }
})

export default signup;