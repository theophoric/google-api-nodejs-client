/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Debugger API
 *
 * @classdesc 
 * @namespace clouddebugger
 * @version  v2
 * @variation v2
 * @this Clouddebugger
 * @param {object=} options Options for Clouddebugger
 */
function Clouddebugger(options) {

  var self = this;
  this._options = options || {};

  this.controller = {

    debuggees: {

      /**
       * clouddebugger.controller.debuggees.register
       *
       * @desc Registers the debuggee with the controller. All agents should call this API with the same request content to get back the same stable 'debuggee_id'. Agents should call this API again whenever ListActiveBreakpoints or UpdateActiveBreakpoint return the error google.rpc.Code.NOT_FOUND. It allows the server to disable the agent or recover from any registration loss. If the debuggee is disabled server, the response will have is_disabled' set to true.
       *
       * @alias clouddebugger.controller.debuggees.register
       * @memberOf! clouddebugger(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      register: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://clouddebugger.googleapis.com/v2/controller/debuggees/register',
            method: 'POST'
          },
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      breakpoints: {

        /**
         * clouddebugger.controller.debuggees.breakpoints.list
         *
         * @desc Returns the list of all active breakpoints for the specified debuggee. The breakpoint specification (location, condition, and expression fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line the breakpoint was set to, but that doesn't change the breakpoint semantics. Thus, an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember breakpoints that are complete until the controller removes them from the active list to avoid setting those breakpoints again.
         *
         * @alias clouddebugger.controller.debuggees.breakpoints.list
         * @memberOf! clouddebugger(v2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.debuggeeId - Identifies the debuggee.
         * @param  {string=} params.waitToken - A wait token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server selected timeout has expired. The value should be set from the last returned response. The error code google.rpc.Code.ABORTED is returned on wait timeout (which does not require the agent to re-register with the server)
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://clouddebugger.googleapis.com/v2/controller/debuggees/{debuggeeId}/breakpoints',
              method: 'GET'
            },
            params: params,
            requiredParams: ['debuggeeId'],
            pathParams: ['debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.controller.debuggees.breakpoints.update
         *
         * @desc Updates the breakpoint state or mutable fields. The entire Breakpoint protobuf must be sent back to the controller. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the 'location', 'condition' and 'expression' fields should not alter the breakpoint semantics. They are restricted to changes such as canonicalizing a value or snapping the location to the correct line of code.
         *
         * @alias clouddebugger.controller.debuggees.breakpoints.update
         * @memberOf! clouddebugger(v2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.debuggeeId - Identifies the debuggee being debugged.
         * @param  {string} params.id - Breakpoint identifier, unique in the scope of the debuggee.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://clouddebugger.googleapis.com/v2/controller/debuggees/{debuggeeId}/breakpoints/{id}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['debuggeeId', 'id'],
            pathParams: ['debuggeeId', 'id'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };

  this.debugger = {

    debuggees: {

      /**
       * clouddebugger.debugger.debuggees.list
       *
       * @desc Lists all the debuggees that the user can set breakpoints to.
       *
       * @alias clouddebugger.debugger.debuggees.list
       * @memberOf! clouddebugger(v2)
       *
       * @param  {object=} params - Parameters for request
       * @param  {string=} params.project - Set to the project number of the Google Cloud Platform to list the debuggees that are part of that project.
       * @param  {boolean=} params.includeInactive - When set to true the result includes all debuggees, otherwise only debugees that are active.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://clouddebugger.googleapis.com/v2/debugger/debuggees',
            method: 'GET'
          },
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      breakpoints: {

        /**
         * clouddebugger.debugger.debuggees.breakpoints.set
         *
         * @desc Sets the breakpoint to the debuggee.
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.set
         * @memberOf! clouddebugger(v2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.debuggeeId - The debuggee id to set the breakpoint to.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        set: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://clouddebugger.googleapis.com/v2/debugger/debuggees/{debuggeeId}/breakpoints/set',
              method: 'POST'
            },
            params: params,
            requiredParams: ['debuggeeId'],
            pathParams: ['debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.debugger.debuggees.breakpoints.get
         *
         * @desc Gets breakpoint information.
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.get
         * @memberOf! clouddebugger(v2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.debuggeeId - The debuggee id to get the breakpoint from.
         * @param  {string} params.breakpointId - The breakpoint to get.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://clouddebugger.googleapis.com/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['debuggeeId', 'breakpointId'],
            pathParams: ['debuggeeId', 'breakpointId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.debugger.debuggees.breakpoints.delete
         *
         * @desc Deletes the breakpoint from the debuggee.
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.delete
         * @memberOf! clouddebugger(v2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.debuggeeId - The debuggee id to delete the breakpoint from.
         * @param  {string} params.breakpointId - The breakpoint to delete.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://clouddebugger.googleapis.com/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['debuggeeId', 'breakpointId'],
            pathParams: ['debuggeeId', 'breakpointId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.debugger.debuggees.breakpoints.list
         *
         * @desc Lists all breakpoints of the debuggee that the user has access to.
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.list
         * @memberOf! clouddebugger(v2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.debuggeeId - The debuggee id to list breakpoint from.
         * @param  {boolean=} params.includeAllUsers - When set to true the response includes the list of breakpoints set by any user, otherwise only breakpoints set by the caller.
         * @param  {boolean=} params.includeInactive - When set to true the response includes active and inactive breakpoints, otherwise only active breakpoints are returned.
         * @param  {string=} params.action.value - Only breakpoints with the specified action will pass the filter.
         * @param  {boolean=} params.stripResults - When set to true the response breakpoints will be stripped of the results fields: stack_frames, evaluated_expressions and variable_table.
         * @param  {string=} params.waitToken - A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired. The value should be set from the last response to ListBreakpoints. The error code ABORTED is returned on wait timeout, which should be called again with the same wait_token.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://clouddebugger.googleapis.com/v2/debugger/debuggees/{debuggeeId}/breakpoints',
              method: 'GET'
            },
            params: params,
            requiredParams: ['debuggeeId'],
            pathParams: ['debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * Exports Clouddebugger object
 * @type Clouddebugger
 */
module.exports = Clouddebugger;