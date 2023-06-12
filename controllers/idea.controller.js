

const req = require("express/lib/request");
const ideas = require("../models/idea.model");
const res = require("express/lib/response");

let idCount= 1;


// Search idea 
exports.fetchAllIdeas= (req, res) => {
    res.status(200).send(ideas);
}

// Create idea 

exports.createIdea = (req, res) =>{
    // Read the request body by the client
    const idea = req.body;
    // Need to generate next id count
    idea.id = ++idCount;
    //save in the existing ideas
    ideas[idCount] = idea;
    // return the response
    res.status(201).send(ideas[idCount]);
}
// update idea 

exports.updateIdea = (req, res) =>{
    // I need to read  the Id passed to the path
    // 127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId = req.params.id;

    // If the idea is present then modify else return error
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);

    }else {
        res.status(400).send({
            message : 'idea id passed was not correct'
        })
    }
}

// Delete idea 
exports.deleteIdea = (req, res) =>{
    // First we need to check the id if present then delete else throw an error that id not found
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message : 'Successfully deleted the id '
        })
    }else{
        res.status(400).send({
            message : 'id not present'
        })
    }
}
