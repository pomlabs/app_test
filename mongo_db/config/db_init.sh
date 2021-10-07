mongo --eval \
"db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD'); \
db = db.getSiblingDB('$MONGO_INITDB_DATABASE'); \
db.createUser({ user: '$MONGO_INITDB_USER_USERNAME', pwd: '$MONGO_INITDB_USER_PASSWORD', \
roles: [{ role: 'readWrite', db: '$MONGO_INITDB_DATABASE' }] });"