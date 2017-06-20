$(document).ready(function() {

    var $addBtn = $("button#add-to-do");
    var $toDoInput = $("input#to-do");
    var $toDoUl = $("ol.to-do");
    var $errorMsg = $("p");

    $addBtn.on("click", function() {
        var newToDo = $toDoInput.val();
        if (!checkEmptyInput()) {
            addToDo(newToDo);
        }
    })

    $toDoInput.keypress(function(event) {
        if (event.keyCode == 13) {
            $addBtn.click();
            return false;
            console.log(event);
        }
    })

    function addToDo(newToDo) {
        var newLi = "<li class='to-do'>" + newToDo + "</li>";
        $toDoUl.append(newLi);
        $toDoInput.val("");
    }

    function removeToDo() {
        $toDoUl.on("click", "li.to-do", function() {
            $(this).remove();
        })
    }

    function checkEmptyInput() {
        if ($toDoInput.val() == "") {
            $errorMsg.fadeTo(0, 1);
            setTimeout(showMsgBack, 1000);
            return true;
        }
        return false;

    }

    function showMsgBack() {
        $errorMsg.fadeTo(500, 0);
    }


    removeToDo();

});
