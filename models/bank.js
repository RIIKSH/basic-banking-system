const express = require('express');
const mongoose = require("mongoose");
require('mongoose-type-url');
var validate = require('mongoose-validator')

// mongoose.connect('mongodb://localhost/mybank', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb+srv://RitikSherawat:Ritik12$@cluster0.h84fz.mongodb.net/mybank", {useNewUrlParser: true, useUnifiedTopology: true});
 
var conn=mongoose.connection;

var bankschema = new mongoose.Schema({
    name: String,
    email: String,
    accbalance: Number,
    city: String,
});

var info = mongoose.model('users', bankschema);

const data1=new info({
    name:"Ritik Sherawat",
    email:"ritiksherawat@gmail.com",
    accbalance:100000,
    city: "Delhi"
 });
 const data2=new info({
    name:"Rahesh Mishra",
    email:"rahesht@gmail.com",
    accbalance:150000,
    city: "Bhopal"
 });
 const data3=new info({
    name:"Pepso",
    email:"pepchau@gmail.com",
    accbalance:50000,
    city: "Mirzapur"
 });
 const data4=new info({
    name:"Daksh Khullar",
    email:"dakshkhulli@gmail.com",
    accbalance:110000,
    city: "sonipat"
 });
 const data5=new info({
    name:"Shefali",
    email:"queenMaundal@gmail.com",
    accbalance:80000,
    city: "Las Vegas"
 });
 const data6=new info({
    name:"Batista",
    email:"paranoid619@gmail.com",
    accbalance:126000,
    city: "Los Angles"
 });
 const data7=new info({
    name:"Rowdy",
    email:"yadav69@gmail.com",
    accbalance:200000,
    city: "Delhi"
 });
 const data8=new info({
    name:"MS Sethi",
    email:"tiksethi23@gmail.com",
    accbalance:400000,
    city: "Wasseypur"
 });

 var arr =[data1,data2,data3,data4,data5,data6,data7,data8];

//  info.insertMany(arr,function(err){
//            if(err){
//                console.log(err);
//            }
//            else{
//                console.log("Successfully added");
//            }
//         });

module.exports = info;