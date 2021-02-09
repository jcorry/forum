$(function () {
  console.log("ready...");
  getThreads();
});

function getThreads() {
  axios.get("http://localhost:3000/api/threads").then((response) => {
    $("#thread-display").empty();
    $.tmpl($("#thread-template"), response.data).appendTo("#thread-display");

    // Now that we've added the threads, with buttons to #thread-template
    // we can bind the event handler to each button's click event
    $("#thread-display button").on("click", function () {
      var id = $(this).data("thread-id");
      var content = $(`textarea#comment-${id}`).val();
      var author = $(`input#author-${id}`).val();

      let url = `/api/threads/${id}/comment`;
      var data = {
        threadId: id,
        content: content,
        author: author,
      };

      axios.post(url, data).then((response) => {
        getThreads();
      });
    });
  });
}
