$(function () {
  console.log("ready!");

  // click a button event to load data

  $("#loadProfile").on("click", function () {
    console.log("button clicked: "); //TODO: find out who clicked me, w/this?

    $.ajax({
      url: "https://barrycumbie.github.io/ubiquitous-giggle-india/assets/data.json",
      dataType: "json",
      success: function (data) {
        console.log(data.userName);
        $("#userName").val(data.userName);
        console.log(data.optIn);

        $("#optIn").prop("checked", data.optIn);
      },
    });

    //TODO: can we grab data form anohter website.
  });

  $("#displayProfile").on("click", function () {
    console.log("dipsplay button clicked: "); //TODO: find out who clicked me, w/

    $("#dataContainer").append(
      $("#userName").val() + " put in ... data from my input boxes"
    );
  });
});
