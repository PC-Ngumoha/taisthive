#!/usr/bin/bash
# Contains the code to automate the process of running the tests
# and returning a coverage report
coverage run manage.py test recipes && coverage report -m