# Solana NFT Minter

**1.) Upload Command:**

```shell
npx ts-node "$pathname\metaplex\js\packages\cli\src\candy-machine-v2-cli.ts" upload -e devnet -k "$pathname\keypair.json" -cp "$pathname\config.json" "$pathname\assets"
```

**2.) Verify the Upload on Arweave:**

```shell
npx ts-node "$pathname\metaplex\js\packages\cli\src\candy-machine-v2-cli.ts" verify_upload -e devnet -k "$pathname\keypair.json"
```

**3.) Mint 1 NFT Through CLI:**

```shell
npx ts-node "$pathname\metaplex\js\packages\cli\src\candy-machine-v2-cli.ts" mint_one_token -e devnet -k "$pathname\keypair.json"
```

**4.) Start the Web Server:**

```shell
cd "$pathname\metaplex\js\packages\candy-machine-ui" && yarn install && yarn start
```

**NOTE:** The above command requires custom **REACT_APP_CANDY_MACHINE_ID** to be set inside the metaplex\js\packages\candy-machine-ui\.env file
