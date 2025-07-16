const Joi=require('joi');

const kutyanevSchema= Joi.object({
    kutyanev:Joi.string().min(2).max(50).required()
});

module.exports=kutyanevSchema;