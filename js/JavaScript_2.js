function myFunction(){
    class person{
        constructor(x, y){
            console.log("constructed")
            this.name = x;
            this.email = y;
        }

        empty(){
            console.log("empty");
            console.log("this.name: "+this.name);
            if(this.name == "" || this.email == ""){
                console.log("if")

                document.getElementById("feedback").innerHTML = "You forgot to fill out a field. Please fill out the appropriate field."
            }
            else{
                this.checkName();
            }
        }

        accepted(){
            document.getElementById("feedback").innerHTML = "Your information has been accepted!";
        }

        checkName(){
            var x;
            x = this.name.indexOf(" ");

            if(x == -1 || Number.isInteger(this.name) == true){
                document.getElementById("feedback").innerHTML = "You're missing a first or last name.  Please correct the issue.";
            }
            else{
                this.checkEmail();
            }
        }

        checkEmail(){
            var x;
            var y;
            x = this.email.indexOf("@");
            y = this.email.length - (this.email.lastIndexOf(".") + 1);
            console.log(x, y);

            if(x == -1 || y != 3){
                document.getElementById("feedback").innerHTML = "Please enter a valid email address."
            }
            else{
                this.accepted();
            }
        }
    }

    myInput = new person(document.getElementById("name").value, document.getElementById("email").value);

    myInput.empty();
}
