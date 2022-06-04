<script>
    class Task{
        constructor(title, desc, priority, dueDate)
        {
            this.title = title;
            this.desc = desc;
            this.priority = priority;
            this.dueDate = dueDate;
        }
    }
    
    function formReset(){
        document.getElementById("task-title-input").value = "";
        document.getElementById("task-desc-input").value = "";

        for (i = 0; i < 3; i++){
            document.checkboxInputForm.priorityLevel[i].checked = false;                
        }
        for (i = 0; i < 5; i++){
            document.checkboxInputForm.dueDate[i].checked = false;
        }
    }
    
    function submitFunc(){

        var checkifcheck = document.querySelectorAll('input[name="dueDate"]:checked');
        console.log(checkifcheck);
        
        //if array of checked due dates is empty, go to ql else go to cal
        if (checkifcheck.length == 0 && document.getElementById("task-title-input").value != ""){
            addQuickList();
        } else if (document.getElementById("task-title-input").value != ""){
            addCal();
        }
        formReset();
    } 

    function addQuickList(){
        
        var entry = new Task (
            document.getElementById("task-title-input").value,
            document.getElementById("task-desc-input").value,
            document.checkboxInputForm.priorityLevel.value,
            document.querySelectorAll('input[name="dueDate"]:checked')
        )
        console.log(entry);

        //get title
        var taskTitle = entry.title;
        var newTask =  document.createTextNode(taskTitle);

        //delete button
        var deleteButton = document.createElement("button");
        deleteButton.className = "fa fa-trash-o"; 
        deleteButton.style.cssText = "color:red; background-color:lightgray; border:none;"
        deleteButton.onclick = function () {  
            console.log(this.parentNode);
            this.parentNode.remove();
            };

        //add linebreak for desc
        var linebreak = document.createElement("br");

        //make desc element
        var descElement = entry.desc;
        var newDesc = document.createTextNode(descElement);
        var descLine = document.createElement("p");
        descLine.appendChild(newDesc);
        descLine.setAttribute("class", "descClass");

        // get priority
        priorityVar = entry.priority;

        //create li
        var newLine = document.createElement("li");
        newLine.setAttribute("class", "newLineClass");

        //make priority colors work!
        newLine.setAttribute("class", priorityVar)

        //make checkbox element
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkboxid";

        //append
        newLine.appendChild(checkbox);
        newLine.appendChild(newTask);
        newLine.appendChild(deleteButton);
        newLine.appendChild(linebreak);
        newLine.appendChild(descLine);

        var quickListDiv = document.querySelector("#quickListBody");
        quickListDiv.appendChild(newLine);
    }

    function addCal(){
        
        var entry = new Task (
            document.getElementById("task-title-input").value,
            document.getElementById("task-desc-input").value,
            document.checkboxInputForm.priorityLevel.value,
            document.querySelectorAll('input[name="dueDate"]:checked')
        )
        console.log(entry.dueDate);
        
        //get title
        var taskTitle = entry.title;
        var newTask =  document.createTextNode(taskTitle);

         //delete button
        var deleteButton = document.createElement("button");
        deleteButton.className = "fa fa-trash-o"; 
        deleteButton.style.cssText = "color:red; background-color:lightgray; border:none;"
        deleteButton.onclick = function () {
            console.log(this.parentNode);
            this.parentNode.remove();
            };

        //add linebreak for desc
        var linebreak = document.createElement("br");

        //make desc element
        var descElement = entry.desc;
        var newDesc = document.createTextNode(descElement);
        var descLine = document.createElement("p");
        descLine.appendChild(newDesc);
        descLine.setAttribute("class", "descClass");

        // get priority
        priorityVar = entry.priority;

        //create li
        var newLine = document.createElement("li");

        //make priority colors work!
        newLine.setAttribute("class", priorityVar)

        //make checkbox element
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkboxid";

        //append
        newLine.appendChild(checkbox);
        newLine.appendChild(newTask);
        newLine.appendChild(deleteButton);
        newLine.appendChild(linebreak);
        newLine.appendChild(descLine);

        

        for (i = 0; i < 5; i++){
            switch(i){
                case 1:
                    if (document.querySelector('#Monday').checked == true){
                        var mondayDiv = document.querySelector("#mondayBody");
                        mondayDiv.appendChild(newLine);
                    }
                    break;
                case 2:
                    if (document.querySelector('#Tuesday').checked == true){
                        var tuesdayDiv = document.querySelector("#tuesdayBody");
                        tuesdayDiv.appendChild(newLine);
                    }
                    break;
                case 3: 
                    if (document.querySelector('#Wednesday').checked == true){
                        var wednesdayDiv = document.querySelector("#wednesdayBody");
                        wednesdayDiv.appendChild(newLine);
                    }
                    break;
                case 4:
                    if (document.querySelector('#Thursday').checked == true){
                        var thursdayDiv = document.querySelector("#thursdayBody");
                        thursdayDiv.appendChild(newLine);
                    }
                    break;
                default:
                    if (document.querySelector('#Friday').checked == true){
                        var fridayDiv = document.querySelector("#fridayBody");
                        fridayDiv.appendChild(newLine);
                    }
                    break;
            }
        }
    }
        
</script>