exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Create SubAdmin is working"
    })
};


exports.read = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Read SubAdmin is working"
    })

 };

 exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data: "Delete SubAdmin is working"
    })
 };

 exports.update = async (req, res) => {
    res.status(200).json({
        status:"success", 
        data: "Update SubAdmin is working"
    })
  };