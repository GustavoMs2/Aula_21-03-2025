var express = require('express')
var ejs = require('express')
var app = express()
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/teste', function(rec, res){
    res.render('home')
   
})

app.get('/cana', function(req, res){
    var idade =req.query.idade
    var nome = req.query.nome
    res.render('cana', {idade,nome})
    
    console.log(idade)

    if(idade >= 18){
        res.send('<h1 style="color: blue"> vai em cana! </h1>')
    }else{
        res.send('<h1 style= "color: red"> fica tranquilo e vai pra casa </h1>')
    }
})

app.get('/formulario', (req,res) => {
    
})

app.listen(3000,function(){
    console.log("deita aqui deita!!!")
})