export default (req, res, next) => {
    const userId = req.headers['user-id'];
    
    if (!userId) {
    return res.status(401).json({ message: 'Not authorized (Missing user-id header)' });
    }
    
    req.userId = userId;
    next();
    };