const { MongoClient } = require("mongodb");
const dotenv = require('dotenv')

const connectDatabase = async () => {

  const client = new MongoClient(URI);

  try {
    await client.connect();

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

connectDatabase()

const deleteUsersWithLongPasswords = async(client, param) =>  {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .deleteMany({ userName: { $regex: param } });
}

const  deleteListingByName = async (client, userName: string) => {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .deleteOne({ name: userName });
}

const upsertListingByName = async (client, nameOfUser, updatedUser) => {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .updateOne({ name: nameOfUser }, { $set: updatedUser }, { upsert: true });
}
const updateUserByName = async(client, nameOfUser, updatedUser) => {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .updateOne({ name: nameOfUser }, { $set: updatedUser });
}

const findOneUserByName = async(client, nameOfUser) => {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .findOne({ name: nameOfUser });
}

const createMultipleUsers = async(client, newUser) => {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .insertMany(newUser);
}

const createUser = async(client, newUser) => {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .insertOne(newUser);
}