'use strict';

import {Request, Response} from 'express';
import models from '../../../models';
export function openLockHandler(req, res) {
    let body = req.body;
    let {email,stripe_token} = body;
    models.User.findOne( {where: { email: email}}).then(data =>{
        if(!data)  return res.json({ status: 400, success: false, data: null, message:"Email not found" });  

        console.log(data.email);
   
    var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
    
    stripe.customers.create({
      description: data.email,
      source:stripe_token// obtained with Stripe.js
    }, function(err, customer) {

        if(err){
            return res.json({ status: 400, success: false, data: err, message:"Error occured while creating card" });  
            
        }
       var card=customer.sources.data[0];
         models.Card.create({ 
            source_id:card.id,
            brand:card.brand,
            country:card.country,
            exp_month:card.exp_month,
            fingerprint:card.fingerprint,
            last4:card.last4,
            user_id:data.id,
            customer:card.customer,
            status:true
        }).then(data => {
            res.json({success: true, data:data, message: 'customer create succcessfully'});
        }) 
    });
})
}

export function closeLockHandler(req, res) {
    res.json({success: true, message: 'closeLockHandler handler called'});
}

export function getAvailableLocksHandler(req, res) {
    res.json({success: true, message: 'getAvailableLocksHandler handler called'});
}

export function getMyLocksHandler(req, res) {
    res.json({success: true, message: 'getMyLocksHandler handler called'});
}