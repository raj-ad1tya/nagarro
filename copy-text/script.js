$("#copy-text").val('A total of 18 students from West Bengal were among the 110 who figure in the top three rank holders list of the Indian Certificate of Secondary Education (ICSE) exams, the results of which were announced on Sunday. Nine class 10 students of Bengal got the all India second rank - six of them boys and three girls - with 498 marks out of 500.')

$("#copy-btn").click( () => {
    var copyText = document.getElementById("copy-text");
    copyText.select();
    copyText.setSelectionRange(0, 1000);
    navigator.clipboard.writeText(copyText.value);
    $("#copy-btn").html("Copied!");
    setTimeout(() => {
        $("#copy-btn").html("Copy");
    }, 1000);
});

$("#paste-btn").click( async () => {
  try {
    var text = await navigator.clipboard.readText();
    $("#paste-text").val(text);
    $("#paste-btn").html("Pasted!");
    setTimeout(() => {
        $("#paste-btn").html("Paste");
    }, 1000);
  }
  catch (error) {
    alert(error);
  }
});
