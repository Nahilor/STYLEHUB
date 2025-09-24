const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

app.use(express.json());
// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path, stat) => {
        console.log('Serving static file:', path);
    }
}));

const authroutes = require('./src/routes/authRoutes.js');
app.use(authroutes);
app.use('/auth', authroutes);


// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'landing.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'signup.html'));
})

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'faq.html'));
})

app.get('/returns', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'returns.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'about.html'));
})
app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'customer-service.html'));
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'profile.html'));
})


// listening for requests on the port specified
app.listen(port, host, () => {
    console.log(`Listening at ${host}:${port}`);
})