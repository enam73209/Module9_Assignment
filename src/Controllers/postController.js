exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Create Post is working"
    })
};


exports.read = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Read Post is working"
    })

 };

 exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Delete Post is working"
    })
 };

 exports.update = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Update Post is working"
    })
  };