import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const URI = 
'mongodb+srv://robberyteam7_db_user:room12@cluster0.a1uplna.mongodb.net/test?appName=Cluster0';

mongoose
.connect(URI)
.then(() => {
    console.log('Conected to MongoDB');
})
.catch((e) => {
    console.error(e);
});