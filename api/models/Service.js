/**

Copyright 2016, Cloud Compass Computing, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
/**
 * Service.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string"
    },
    platform: {
      type: 'string',
      required: true
    },
    token: {
      type: 'string',
      required: true
    },
    modules: {
      collection: 'module',
      via: 'service'
    }
  },

  beforeCreate: [

    // TODO encrypt the token
    function encrypt(service, next) {
      // encrypt service.token
      // service.token = new encrypted value
      next();
    },

    // set name property to a friendly name
    function getName(service, next) {
      switch (service.platform) {
        case 'github':
          GithubService.getAccount(service, function (name, error) {
            if (error != null) {
              sails.log.warn('could not retrieve name');
              next(new Error(error.message));
            } else {
              sails.log.info('found github account', name);
              service.name = name;
              next();
            }
          });
          break;
        default:
          service.name = 'unknown platform';
          break;

        ///
      }
    }
  ],

  afterDestroy: function (destroyedRecords, cb) {
    Module.destroy({service: _.pluck(destroyedRecords, 'id')}).exec(cb);
  }

};

