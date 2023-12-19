const businessLogicLayer = {
    authenticate: function(username, password) {
      // Call data access layer function
      const userExists = dataAccessLayer.checkUser(username, password);
  
      if (userExists) {
        return { success: true };
      } else {
        return { success: false, message: 'Invalid username or password' };
      }
    }
  };