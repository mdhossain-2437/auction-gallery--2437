#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
else
  echo "Build failed!"
  exit 1
fi

# Deploy to surge
echo "Deploying to surge..."

# Check if surge CLI is installed
if ! command -v surge &> /dev/null; then
  npm install -g surge
fi

npx surge dist/ auction-gallery-2437.surge.sh

echo "Deployment complete!"