
let {sequelizeCon,Model,DataTypes}=require("../init/dbConfig");


class User extends Model{}

User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(155),
        allowNull:false
    },
    emailID:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING(400),
        allowNull:false,
    },
    otp:{
        type:DataTypes.STRING(300),
        allowNull:true
    },
    token:{
        type:DataTypes.STRING(500)
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    },  
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull:false
    },
    updatedBy:{
        type:DataTypes.INTEGER,
        allowNull:true
    }

},{tableName:"user",modelName:"User",sequelize:sequelizeCon });
// User.sync({force:true})

module.exports={User}