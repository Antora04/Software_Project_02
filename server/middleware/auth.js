const LOCAL_ROUTINE_MANAGER = Object.freeze({
  // Match the administrator record stored in routine-maker.sqlite so routine
  // create, publish, version, and history foreign keys remain valid.
  id: 'u-admin',
  email: 'routine.manager@local',
  role: 'ADMIN',
  firstName: 'Routine',
  lastName: 'Manager',
  isChair: true,
});

// This package is intentionally designed for a trusted local workstation and
// has no login page. The route layer still receives a stable administrator
// identity so the original routine rules and write paths remain unchanged.
function authenticateUser(req, res, next) {
  req.user = LOCAL_ROUTINE_MANAGER;
  next();
}

function requireRoles() {
  return (req, res, next) => next();
}

module.exports = { authenticateUser, requireRoles };
