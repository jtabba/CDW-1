const { MongoClient } = require("mongodb");

async function main() {
  const uri = `mongodb+srv://noahmilliken:creamfilling@oreocluster.kasbgor.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await deleteUsersWithLongPasswords(client, "_");

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function deleteUsersWithLongPasswords(client, param) {
  console.log(param);
  const result = await client
    .db("userDatabase")
    .collection("users")
    .deleteMany({ userName: { $regex: param } });
  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function deleteListingByName(client, userName) {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .deleteOne({ name: userName });

  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function upsertListingByName(client, nameOfUser, updatedUser) {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .updateOne({ name: nameOfUser }, { $set: updatedUser }, { upsert: true });
  console.log(`${result.matchedCount} document(s) matchet the query  criteria`);
  if (result.upsertedCount) {
    console.log(`${result.upsertedCount} documents were upserted.`);
  }
  console.log(`${result.modifiedCount} document was/were updated.`);
}

async function updateUserByName(client, nameOfUser, updatedUser) {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .updateOne({ name: nameOfUser }, { $set: updatedUser });
  console.log(`${result.matchedCount} document(s) matched the criteria`);
  console.log(`${result.modifiedCount} document was/were updated.`);
}

async function findOneUserByName(client, nameOfUser) {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .findOne({ name: nameOfUser });

  if (result) {
    console.log(`found user with the name ${nameOfUser}`);
    console.log(result);
  } else {
    console.log(`No listings found with the name ${nameOfUser}`);
  }
}

async function createMultipleUsers(client, newUser) {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .insertMany(newUser);
  console.log(
    `${result.insertedCount} new users created with id(s): ${result.insertedIs}`
  );
}

async function createUser(client, newListing) {
  const result = await client
    .db("userDatabase")
    .collection("users")
    .insertOne(newListing);

  console.log(`New user created with id: ${result.insertedId}`);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`_ ${db.name}`);
  });
}