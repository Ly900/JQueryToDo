$(document).ready(function() {

    var $addBtn = $("button#add-to-do");
    var $toDoInput = $("input#to-do");
    var $toDoUl = $("ol.to-do");
    var $errorMsg = $("p");
    var $toDoHelper = $("div.to-do-helper");
    var counter = 0;

    // Adds new to do list item to ordered list.
    $addBtn.on("click", function() {
        var newToDo = $toDoInput.val();
        if (!checkEmptyInput()) {
            addToDo(newToDo);
        }
    })

    // Pressing Enter from keyboard adds to do.
    $toDoInput.keypress(function(event) {
        if (event.keyCode == 13) {
            $addBtn.click();
            return false;
        }
    })

    // Clicking on To Do input.
    $toDoInput.on("click", function() {
        var input = $(this);
        // clearToDoInput(input);
        animateInputBorder(input);
        moveToDoHelper();
    })

    // Clicking on To Do List item.
    $toDoUl.on("click", "li.to-do", function() {
        var toDoItem = $(this);
        removeToDo(toDoItem);
    });

    // Clears to do input.
    function clearToDoInput(input) {
        input.attr("placeholder", "");
    }

    // Moves hidden "New To Do" words above input area.
    function moveToDoHelper() {
        $toDoHelper.addClass("animated");
    }

    // Animates input's bottom border when clicked on.
    function animateInputBorder(input) {
        input.addClass("animated-border");
    }

    // When the user clicks anywhere off the input.
    $toDoInput.blur(function() {
        var input = $(this);
        hideToDoHelper();
        // undoClearInput(input);
        unanimateBorder(input);
    })

    // Adds placeholder back into cleared input.
    function undoClearInput(input) {
        input.attr("placeholder", "New To Do");
    }

    // Removes animation from input's bottom border.
    function unanimateBorder(input) {
        input.removeClass("animated-border");
    }

    // Hides "New To Do" animation under input again.
    function hideToDoHelper() {
        $toDoHelper.removeClass("animated");
    }

    // Adds a new list item with to do captured from input.
    function addToDo(newToDo) {
        var newLi = "<li class='to-do'>" + newToDo + counter + "<span class='checkmark'>&#10004;</span></li>";
        $toDoUl.append(newLi);
        counter++;
        // Code to clear input.
    }

    // Removes to do list item from ordered list.
    function removeToDo(toDoItem) {
        $(toDoItem).remove();
    }

    // Shows a hidden error message if an empty to do input is submitted.
    function checkEmptyInput() {
        if ($toDoInput.val() == "") {
            $errorMsg.fadeTo(0, 1);
            setTimeout(function showMsgBack() {
                $errorMsg.fadeTo(500, 0);
            }, 1000);
            return true;
        }
        return false;

    }
});
