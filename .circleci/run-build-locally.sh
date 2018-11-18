#!/usr/bin/env bash
curl --user $9f0f108b16dce044714fbcedcd3a3860587beff8: \
    --request POST \
    --form revision=4a8f8d9c11e4af3b43ae3531a478542257b58d08\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/NickPelov/knn-app/tree/master