<p align="center"><a href="https://github.com/du5rte/create-secrets-file" target="_blank" rel="noopener noreferrer"><img width="100" src="key.svg" alt="Key"></a></p>

<p align="center"><a href="https://github.com/du5rte/create-secrets-file"><img alt="GitHub Actions Test Status" src="https://github.com/du5rte/create-secrets-file/workflows/Test/badge.svg"/></p>

# Create Secrets File Action

This action creates a secrets file (e.g. `.env`) by taking environment keys from github secrets.


## Example usage

```yaml
uses: du5rte/create-secrets-file@v1
with:
  secrets: |
    API_KEY=${{ secrets.API_KEY }}
    SECRET_KEY=${{ secrets.SECRET_KEY }}
    DB_URI=${{ secrets.DB_URI }}
  # optionals
  # file: .env
  # mode: dotenv
  # path: src
```

**Note!**
By default the action dirname would be `/home/runner/work/_actions/du5rte/create-secrets-file/v1` instead it saves it 3 scopes bellow to be accessible to other actions `/home/runner/work/.env`.

### Node.js
If you need a simple secrets handler for Node.js 🗝️, checkout [secrets](https://github.com/du5rte/secrets)

```javascript
import 'secrets'
```

### Babel Plugin
Also works with babel

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['secrets/babel-plugin-secrets'],
}
```

## Github Action
To create secrets `.env` file on demands on your github actions checkout [du5rte/create-secrets-file](https://github.com/du5rte/create-secrets-file)


## Inputs

### `secrets`

**Required** The environment keys you wish to save to the file

### `file`

**Optional** The file name it will save it to. Default `.env`.

## Outputs

### `logs`
It should output what keys were parsed and the file

```
Found ".env" in "/":
{
  API_KEY: ***
  SECRET_KEY: ***
  DB_URI: ***
}
```

### `file`
It should then 
```
API_KEY: 9j39j39j39j39j3
SECRET_KEY: 0k30k30k30k30k30k3
DB_URI: mongodb+srv://cluster-6f36f36f3.mongodb.net
```
