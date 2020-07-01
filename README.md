# Library Control - UTE

# How to Run

### Create a file .env
```sh
    PORT=4000
    HOST=localhost
    USERNAME=root
    PASSWORD=test
    PORTDATABASE=3306
    DATABASE=library_control_ute
```

### Create file ormconfig.json

```sh
{
    "type": "mysql",
    "username": "root",
    "password": "test",
    "host": "localhost",
    "port": 3306,
    "database": "library_control_ute",
    "entities": [
        "src/modules/**/*.entity.{ts,js}"
    ],
    "migrations": ["src/database/migrations/*{.ts, .js}"],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
}
```
