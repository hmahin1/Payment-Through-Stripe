'use strict';

import {Request, Response} from 'express';
import models from '../../../models';
export function register(req, res) {
    let body = req.body;
    console.log(body);
    let { firstName, lastName, email, password} = body;
    models.User.findOne( {where: { email: email}}).then(data =>{
      if(data)  return res.json({ status: 400, success: false, data: null, message:"Email already exist" });
   
     models.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        token: null,
        active: true,
        expired:false
    }).then(data => {
        res.json({success: true, data:data, message: 'register successfully '});
    })
})
}
