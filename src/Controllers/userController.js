exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Create User is working"
    })
};


exports.read = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Read User is working"
    })

 };

 exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Delete User is working"
    })
 };

 exports.update = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Update User is working"
    })
  };