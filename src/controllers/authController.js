const { login, register } = require('../services/authService');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await login(email, password);

        if (!result.object) {
            return res.status(401).json({ message: result.message });
        }

        res.json(result);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body; // use 'name' from request
        const result = await register(name, email, password);

        if (!result.object) {
            return res.status(401).json({ message: result.message });
        }

        res.json(result);
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { loginController, signupController };
