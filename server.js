const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
// to allow other clients to access this backend server
app.use(cors());

// get all customers
app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName : 'Doe'},
        { id: 2, firstName: 'Mary', lastName : 'Ilunga'},
        { id: 3, firstName: 'Papa Core', lastName : 'Mutombo'}
        
    ];
    res.json(customers);
});


// starting the server
app.listen(port, () => console.log(`Server started on port ${port}`));
