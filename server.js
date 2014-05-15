var fs = require('fs'),
    http = require('http');
 
http.createServer(function (req, res) {
  fs.readFile('./form.html', function (err, html) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html + '<option>Tools</option>');
    for (var i = 0; i < 5; i++) { 
      res.write('<option>Tools</option>');
    }
    res.write('</select><button type="submit" name="submit" id="submit">Save</button></body></form></html>');  
    
    res.write(' <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>');
    res.write('<script src="js/bootstrap.min.js"></script>');
    res.end();
  });
})
.listen(8080);
