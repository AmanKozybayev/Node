const expr = 'Pomidores';
switch (expr) {
    case 'Oranges': 
        console.log('Oranges are 600 tenge za kg.');
        break;
    case 'Mangoes': 
    case 'Papayas':
        console.log('Mangoes and Papayas are 600 tenge za kg');
        break;
    default: 
        console.log(`Sorry bro, we are out of ${expr}`);
        //expect Sorry bro we are out of pomidores 

}

