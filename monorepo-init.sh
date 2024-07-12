#!/usr/bin/env bash

SERVER_ENV=@app/server/.env
if [ ! -f "$SERVER_ENV" ]; then
    echo "creating $SERVER_ENV"
    cp $SERVER_ENV.base $SERVER_ENV
else 
    echo "$SERVER_ENV already exists"    
fi
