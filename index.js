var giphyApiKey = "mxITmr4OQ8EGK31cSBnZ6rNJEa4fLcel";

function sendApiRequest(){
  var input = document.getElementById("input").value;

  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyApiKey}`;

  fetch(giphyApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var img = document.createElement("img");
      img.src = json["data"][0]["images"]["fixed_height"]["url"];
      document.body.appendChild(img);
    })
  }
