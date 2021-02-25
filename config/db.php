<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=' . $_ENV['MYSQL_HOSTNAME'] . ';dbname=' . $_ENV['MYSQL_DATABASE'] . '',
    'username' => $_ENV['MYSQL_USER'],
    'password' => $_ENV['MYSQL_PASSWORD'],
    'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];
