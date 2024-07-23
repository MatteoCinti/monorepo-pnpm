#!/usr/bin/env bash

ENV_FILE=.env
if [ ! -f "$ENV_FILE" ]; then
    echo "creating $ENV_FILE"
    cp $ENV_FILE.base $ENV_FILE
else 
    echo "$ENV_FILE already exists"    
fi
