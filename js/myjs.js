$(document).ready(function() {

    var $addBtn = $("button#add-to-do");
    var $toDoInput = $("input#to-do");
    var $toDoUl = $("ol.to-do");
    var $errorMsg = $("p");
    var $toDoHelper = $("div.to-do-helper");

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
        }
    })

    $toDoInput.on("click", function() {
      var input = $(this);
      clearToDoInput(input);
      animateInputBorder(input);
      moveToDoHelper();
    })

    function clearToDoInput(input) {
      input.attr("placeholder", "");
    }

    function moveToDoHelper() {
      $toDoHelper.addClass("animated");
    }

    function animateInputBorder(input) {
      input.addClass("animated-border");
    }

    $toDoInput.blur(function() {
      var input = $(this);
      hideToDoHelper();
      undoClearInput(input);
      unanimateBorder(input);
    })

    function undoClearInput(input) {
      input.attr("placeholder", "New To Do");
    }

    function unanimateBorder(input) {
      input.removeClass("animated-border");
    }

    function hideToDoHelper() {
      $toDoHelper.removeClass("animated");
    }

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
