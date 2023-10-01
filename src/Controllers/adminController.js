exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Create Admin is working"
    })
};


exports.read = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Read Admin is working"
    })

 };

 exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Delete Admin is working"
    })
 };

 exports.update = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Update Admin is working"
    })
  };