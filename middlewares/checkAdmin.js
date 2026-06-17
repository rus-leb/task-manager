import User from '../models/userModel.js';

export default async (req, res, next) => {
try {
const user = await User.findById(req.userId);
if (user && user.role === 'admin') {
next();
} else {
return res.status(403).json({ message: 'Forbidden (Admin access only)' });
}
} catch (err) {
res.status(500).json({ message: err.message });
}
};