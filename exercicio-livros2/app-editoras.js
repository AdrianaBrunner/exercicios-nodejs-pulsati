const {createEditoras,getEditorasById,getAllEditoras,updateEditoras,deleteEditoras} = require('./controller/editoras-controller');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/editoras', createEditoras);
app.get('/editoras', getAllEditoras);
app.get('/editoras/:codigo', getEditorasById);
app.put('/editoras/:codigo', updateEditoras);
app.delete('/editoras/:codigo', deleteEditoras);

app.listen(8000)