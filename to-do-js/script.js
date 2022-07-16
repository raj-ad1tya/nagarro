var addbtn = document.getElementById("add-btn");
addbtn.addEventListener("click", function() {
    var taskInput = document.getElementById("task-input")
    if(taskInput.value!="") {
        var div = document.createElement("div");
        div.className = "row justify-content-center align-items-center text-white my-2";

        var p = document.createElement("p");
        p.className = "col-sm-8 m-0 bg-dark py-2 rounded";
        p.innerHTML = taskInput.value;
        div.appendChild(p);


        var ico = document.createElement("i");
        ico.className = "col-1 text-center fas fa-trash text-danger py-2";
        div.appendChild(ico);
        ico.addEventListener("click", function() {
            this.parentNode.remove();
        });
        
        document.getElementById("todo").appendChild(div);
        
        taskInput.value="";
    }
});
