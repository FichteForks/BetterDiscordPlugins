import fs from 'fs';
import path from 'path';
import request from 'request';
import electron from 'electron';

import { BdApi } from '@bandagedbd/bdapi';
import ZLibrary from 'zlibrary';

import createPlugin from '{{importPath}}';

const config = {{serializedConfig}};

export default ZLibrary
    ? createPlugin(ZLibrary.buildPlugin(config))
    : class {
        constructor() {
            this._config = config;
        }

        getName() {
            return config.info.name;
        }

        getAuthor() {
            return config.info.authors.map(a => a.name).join(', ');
        }

        getDescription() {
            return config.info.description;
        }

        getVersion() {
            return config.info.version;
        }

        load() {
            BdApi.showConfirmationModal('Library plugin is needed',
                `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                    confirmText: 'Download',
                    cancelText: 'Cancel',
                    onConfirm() {
                        request.get('https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js', (error, response, body) => {
                            if (error) {
                                return electron.shell.openExternal('https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js');
                            }

                            fs.writeFileSync(path.join(BdApi.Plugins.folder, '0PluginLibrary.plugin.js'), body);
                        });
                    }
                });
        }

        start() {

        }

        stop() {

        }
    };
