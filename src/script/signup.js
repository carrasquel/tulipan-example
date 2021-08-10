import html from "../views/signup.html";

const backend_url = process.env.BACKEND_URL;

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

            this.$dialog.show("Signing up...");

            this.$http.post(backend_url + "api/auth/signup", payload).then(function(res){
                
                console.log(res);
                this.$dialog.hide();
                this.$router.navigate("/");
            }, function(err){
                
                this.$dialog.hide();
                console.log(err);
            });
        }
    }
})

export default signup;