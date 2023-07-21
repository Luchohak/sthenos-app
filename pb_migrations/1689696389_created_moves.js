migrate((db) => {
  const collection = new Collection({
    "id": "3opj6l75cr5phx5",
    "created": "2023-07-18 16:06:29.987Z",
    "updated": "2023-07-18 16:06:29.987Z",
    "name": "moves",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "14xdtkvi",
        "name": "explanationVideo",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "sr6kwbob",
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
        "id": "ko37icqr",
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
        "id": "segztf4e",
        "name": "difficulty",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "beginner",
            "intermediate",
            "advanced"
          ]
        }
      },
      {
        "system": false,
        "id": "riyi5isw",
        "name": "categories",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "upper pull",
            "upper push",
            "abs",
            "lower push",
            "isometric",
            "plyometric"
          ]
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
  const collection = dao.findCollectionByNameOrId("3opj6l75cr5phx5");

  return dao.deleteCollection(collection);
})
