#!/bin/bash

git config user.name ${GITHUB_USER_NAME}
git config user.email ${GITHUB_EMAIL}
git config url."https://${GITHUB_USER_NAME}:${GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"
