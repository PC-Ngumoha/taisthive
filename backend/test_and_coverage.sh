#!/usr/bin/bash
# Contains the code to automate the process of running the tests
# and returning a coverage report
# coverage run manage.py test recipes && coverage report -m
APP_NAME="$1"

if [ -z "$APP_NAME" ];
then
    # Runs tests for all apps in the project
    coverage run manage.py test && coverage report -m
else
    # Runs tests for specific app
    coverage run manage.py test "$APP_NAME" && coverage report -m --include=./"$APP_NAME"/*.*
fi