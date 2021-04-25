#!/bin/bash
cd "$(dirname "$0")"
/usr/bin/open -a "/Applications/Google Chrome.app" 'https://localhost:8080/out/'
npm start
