exports.__esModule = true;
function RetrieveDocs(db,res){
    const collection = db.collection('superheros');
    // collection.find({}).toArray(function(err,result){
    //     if(err)throw err;
    //     console.log(result);
    //   })  --->call back

    // now with promise
    // console.log("hi")
    collection.find({}).toArray().then((result) => {
      //console.log(result);
      res.send(result);
    }).catch(function(err){
      console.log(err);
    })
}
exports.retrieve = RetrieveDocs;