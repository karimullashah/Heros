
exports.__esModule = true;
function insertDocs(db, client) {
    const collection = db.collection('superheros');
    // collection.insertMany(herosObj,function(err,result){
    //     if(err)throw err;
    //     console.log("documents inserted");
    // });
    console.log("hi")
    // console.log(herosObj)
    collection.insertOne(herosObj).then(() => {
        console.log("inserted data successfully");
    }).catch(function(err){
        console.log(err);
    })
}

exports.insert = insertDocs;