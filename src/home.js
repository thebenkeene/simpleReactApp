const  Home = () => {
    const handleClick = () => {
        console.log("Ben was here");
        // Download the helper library from https://www.twilio.com/docs/node/install
        // Find your Account SID and Auth Token at twilio.com/console
        // and set the environment variables. See http://twil.io/secure
        const accountSid = ACb1f1631ec8d550fec65a6d9f1648075d;
        const authToken = 6d8166bf4db9b6d05f44cf39929639f7;
        const client = require('twilio')(accountSid, authToken);

        client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+17404964447',
            to: '+19168122142'
        })
        .then(message => console.log(message.sid));

         
       }

    return (
        <div className='Home'>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
      );
}
 
export default Home;