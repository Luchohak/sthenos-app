migrate((db) => {
  const collection = new Collection({
    "id": "tyy3776ljcu2hyq",
    "created": "2023-07-28 16:01:49.670Z",
    "updated": "2023-07-28 16:01:49.670Z",
    "name": "workouts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dwo2kmd1",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kkkygqfo",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pprdlgsg",
        "name": "workoutMoves",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "3opj6l75cr5phx5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tyy3776ljcu2hyq");

  return dao.deleteCollection(collection);
})
