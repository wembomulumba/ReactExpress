const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName : 'Doe'},
        { id: 2, firstName: 'Mary', lastName : 'Ilunga'},
        { id: 3, firstName: 'Papa Core', lastName : 'Mutombo'}
        
    ];
    res.json(customers);
});



app.listen(port, () => console.log(`Server started on port ${port}`));