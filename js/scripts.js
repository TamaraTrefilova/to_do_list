// Business Interface
function List(array) {
  this.array = array;
}

List.prototype.addItem = function(item) {
  this.array.push(item);
}

List.prototype.removeItem = function(item) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] == item) {
      return this.array[i];
    }
  }
}

var showList = function(list) {
  var resultOutput = "";
  for (var i = 0; i < list.array.length; i++) {
    resultOutput = "";
    resultOutput += "<input type=\"checkbox\" value=" + list.array[i] + ">" + list.array[i] + "<br>";
  }
  return resultOutput;
}
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

var cleanList = function(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      array2.pop(array1[i]);
    }
  }
  return array2;
}

// User Interface
$(document).ready(function() {
  var newArray = [];
  var list;
  var doneItems = [];
  $("form#to-do").submit(function(event) {
    event.preventDefault();
    // debugger;
    list = new List(newArray);
    var userNum = $("input#userString").val();
    list.addItem(userNum);
    var result = showList(list);
    $(".result").append(result);
    $("form")[0].reset();

  });


  $("form#done_form").click(function(event) {
    event.preventDefault();
    debugger;
    $.each($("input[type='checkbox']:checked"), function() {
      doneItems.push($(this).val());
    });
    var doneResult = "";
    for (var i = 0; i < doneItems.length; i++) {
      doneResult += "<li>" + doneItems[i] + "</li>";
    }
    $(".done_result").append(doneResult);

    for (var i = 0; i < doneItems.length; i++) {
      var item = doneItems[i];
      if (list.array.includes(item)) {
        var index = list.array.indexOf(item);
        if (index > -1) {
          list.array.splice(index, 1);
        }
      }
    }
    // $("form#to-do")[0].reset();
    // $(".result").append(showList(list));
    $("#done").show();


  });

});
