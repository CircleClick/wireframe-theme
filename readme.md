# SFTP
For use with the [liximomo.sftp](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp) extension.

In `.vscode/sftp-example.json`, update the `remotePath` value to contain the final name of the theme you are going to build. This ensures your themes directory name will stay consistent no matter how many times you re-clone the project.

Copy `.vscode/sftp-example.json` into `.vscode/sftp.json`, this sets it as the active configuration file.

Add your SFTP credentials to `.vscode/sftp.json` for the appropriate `live`, `staging`, or `dev` environments. You don't need to fill in all of them.
Make sure you also add in the server hosts in the `profiles` -> `{profile}` -> `host` field, your value will look something like `exampledev.sftp.wpengine.com`.

The SFTP plugin should be fully configured, to upload something you'll need to select a profile by accessing the VSCode command pallet with `CTRL+Shift+P` (That's the windows/linux command) and typing `SFTP: profile`.

After you are set up, the `SFTP: upload project` command can be used to push all files up to the remote server. Otherwise if the `watcher` command is enabled, any changes you make will be automatically uploaded.


# HTML Template

### Setup

- Use `yarn install` from the command line to install dependencies.
- Build or watch the CSS/JS separately
    - `yarn js` or `yarn watch-js`
    - `yarn css` or `yarn watch-css`




