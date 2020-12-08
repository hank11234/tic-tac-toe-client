# Terminal command: EMAIL="email" PASSWORD="password" sh curl-scripts/auth/sign-up.sh
const config = require('./../config')

curl config.apiUrl \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    
  }'
