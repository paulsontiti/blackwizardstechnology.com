/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DATABASE_URL : "mongodb+srv://bwt:bwt@bwt.rh3hqal.mongodb.net/",
BWT_URL : 'https://www.blackwizardstechnology.com/'
    }
}
//mongodb://127.0.0.1:27017/bwt
//mongodb+srv://bwt:bwt@bwt.rh3hqal.mongodb.net/

//https://www.blackwizardstechnology.com/
//http://localhost:3000/
module.exports = nextConfig
